import { defineStore } from 'pinia'
import {useSequenceStore} from "./sequence";

export const useResultStore = defineStore({
    id: 'result',
    state: () => ({
        result: Array<Array<Number>>(),
        count: "",
        lines: ""
    }),
    actions: {
        calculate(): boolean {
            // Clear the result
            this.result = new Array<Array<Number>>();
            this.count = "";
            this.lines = ""

            const sequenceStore = useSequenceStore()
            const sequences = sequenceStore.sequences;
            const sequenceLength = sequenceStore.sequenceLength;
            const referenceIndex = sequenceStore.referenceIndex;

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
            for(let i=1;i <= sequenceLength;){
                if(i == 1){
                    this.count += "1"
                    i++;
                    console.log(this.count)
                } else if (i%10 == 9){
                    this.count += (i+1).toString()
                    i+=2;
                    console.log(this.count)
                }else if (i == sequenceLength -1 && sequenceLength >= 10){
                    this.count += i.toString()
                    i+=2;
                    console.log(this.count)
                }else if (i == sequenceLength && sequenceLength < 10){
                    this.count += i.toString()
                    i+=1;
                    console.log(this.count)
                }else{
                    this.count += " "
                    console.log(this.count)
                    i++;
                }
            }

            // Construct the display lines
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

            return true;
        },
        validate(): boolean {

            const sequenceStore = useSequenceStore()
            const sequences = sequenceStore.sequences;
            const sequenceLength = sequenceStore.sequenceLength;
            const referenceIndex = sequenceStore.referenceIndex;

            // Sequence array is not empty.
            if (sequences.length <= 1){
                console.error("No data to compute.")
                return false;
            }

            // Make sure the reference index is valid.
            if (referenceIndex < 0 || referenceIndex >= sequences.length){
                console.error("Invalid reference index.")
                return false;
            }

            // Main verification loop.
            for(let i = 0; i < sequences.length; i++){
                const item = sequences[i]

                // All sequences need to have the same length.
                if(item.length != sequenceLength){
                    console.error("Sequences don't have equal length!")
                    return false;
                }

                // All sequences only contains characters from ['A', 'T', 'C', 'G']
                if(item.match(/^[ATCG]*$/g)){
                    console.log(item + "-> Match!")
                }
                else {
                    console.error(item + "-> NOT Match!")
                    return false;
                }

            }

            return true;

        },}
})