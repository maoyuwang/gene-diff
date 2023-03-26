import { defineStore } from 'pinia'
import { useResultStore } from './result';
export const useSequenceStore = defineStore({
    id: 'sequence',
    state: () => ({
        sequenceNames: Array<String>(),
        sequences: Array<String>(),
        referenceIndex: 0
    }),
    getters: {
        sequenceLength: (state) => {
            if (state.sequences.length == 0){
                return -1;
            }else{
                return state.sequences[0].length;
            }
        },
        sequenceNameMaxLength: (state) => {
            // Find the longest sequence length
            let maxLength = 0;
            for(let sequenceName of state.sequenceNames){
                if(sequenceName.length > maxLength){
                    maxLength = sequenceName.length;
                }
            }
            return maxLength + 1;
        },
        
    },
    actions: {
        async newSequence() {
            this.sequences.push('ATCG')
            this.sequenceNames.push('New Sequence')
        },
        async deleteSequence(index: number) {
            this.sequences.splice(index,1)
            this.sequenceNames.splice(index,1)
        },
        async setReference(index: number) {
            this.sequences[0] = this.sequences.splice(index, 1, this.sequences[0])[0];
            this.sequenceNames[0] = this.sequenceNames.splice(index, 1, this.sequenceNames[0])[0];
        },
    }
})