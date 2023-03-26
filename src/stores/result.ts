import { defineStore } from 'pinia'
import {useSequenceStore} from "./sequence";

export const useResultStore = defineStore({
    id: 'result',
    state: () => ({
        errored: false,
        log: "",
        result: Array<Array<Number>>(),
        count: "",
        lines: "",
        names:Array<String>()
    }),
    actions: {
        log_error(log: string) {
            this.errored = true;
            this.log = log;
        },
        reset_error() {
            this.errored = false;
            this.log = "";
        },
        reset_result(){
            this.result = new Array<Array<Number>>();
        },
        validate_sequences () {
            
            const { sequences,referenceIndex,sequenceLength} = useSequenceStore();

            // Reset the error log
            this.reset_error();

            // Sequence array should at least 2 sequences.
            if (sequences.length <= 1){
                this.log_error("At least 2 sequences are required.")
                return false;
            }

            // Make sure the reference index is valid.
            if (referenceIndex < 0 || referenceIndex >= sequences.length){
                this.log_error("Invalid reference index.")
                return false;
            }

            // Main verification loop.
            for(let i = 0; i < sequences.length; i++){
                const item = sequences[i]

                // All sequences need to have the same length.
                if(item.length != sequenceLength){
                    this.log_error("Sequences don't have equal length!")
                    return false;
                }

                // All sequences only contains characters from ['A', 'T', 'C', 'G']
                if(!item.match(/^[ATCG]*$/g)){
                    this.log_error(item + " : is not a valiad sequence. Valid sequences only contains characters from ['A', 'T', 'C', 'G']")
                    return false;
                }

            }

            return true;
        },
        calculate(): boolean {
            // Clear the result
            this.result = new Array<Array<Number>>();
            this.count = "";
            this.lines = "";
            this.names = new Array<String>();

            const {sequences,sequenceLength,referenceIndex, sequenceNames, sequenceNameMaxLength} = useSequenceStore();

            // Validate the sequences
            if(!this.validate_sequences()){
                return false
            }

            // Calculating the difference matrix
            for(let i = 0; i < sequences.length; i++){
                const currentSequence = sequences[i]
                this.result.push([])
                for(let j = 0; j < sequenceLength; j++){
                    if(currentSequence[j] == sequences[referenceIndex][j]){
                        this.result[i].push(1)
                    }else{
                        this.result[i].push(0)
                    }
                }
            }

            // Construct the display counts
            this.count = " ".repeat(sequenceNameMaxLength)
            for(let i=1;i <= sequenceLength;){
                if(i == 1){
                    this.count += "1"
                    i++;
                } else if (i%10 == 9){
                    this.count += (i+1).toString()
                    i+=2;
                }else if (i == sequenceLength -1 && sequenceLength >= 10){
                    this.count += i.toString()
                    i+=2;
                }else if (i == sequenceLength && sequenceLength < 10){
                    this.count += i.toString()
                    i+=1;
                }else{
                    this.count += " "
                    i++;
                }
            }

            // Construct the display lines
            this.lines = " ".repeat(sequenceNameMaxLength)
            for(let i=1;i <= sequenceLength;i++){
                if(i == 1){
                    this.lines += '|'
                }else if (i%10 == 0){
                    this.lines += '+'
                }else if (i == sequenceLength){
                    this.lines += '|'
                }else{
                    this.lines += '-'
                }
            }

            // Construct the display names
            for(let sequenceName of sequenceNames){
                let formatedName = sequenceName + " ".repeat(sequenceNameMaxLength - sequenceName.length)
                this.names.push(formatedName)
            }
            

            return true;
        }
    }
})