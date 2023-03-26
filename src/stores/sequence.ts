import { defineStore } from 'pinia'

export const useSequenceStore = defineStore({
    id: 'sequence',
    state: () => ({
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
        }
    },
    actions: {
        async newSequence() {
            this.sequences.push('')
        },
        async deleteSequence(index: number) {
            this.sequences.splice(index,1)
        },
        async setReference(index: number) {
            this.sequences[0] = this.sequences.splice(index, 1, this.sequences[0])[0];
        },
    }
})