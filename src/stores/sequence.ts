import { defineStore } from 'pinia'

export const useSequenceStore = defineStore({
    id: 'sequence',
    state: () => ({
        sequences: Array<String>(),
        sequenceLength: -1,
        referenceIndex: 0
    }),
    getters: {
        getSequences: (state) => {
            return state.sequences
        },
        getReferenceIndex: (state) => {
            return state.referenceIndex
        }
    },
    actions: {
        async newSequence() {
            this.sequences.push('')
        },
        async deleteSequence(index: number) {
            this.sequences.splice(index,1)
        },
        async updateSequence(index: number,newSequence: String) {
            this.sequences.splice(index,1,newSequence.toUpperCase())
            this.sequenceLength = newSequence.length
        },
        async setReference(index: number) {
            this.sequences[0] = this.sequences.splice(index, 1, this.sequences[0])[0];
        },
    }
})