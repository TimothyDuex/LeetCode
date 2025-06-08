/**
 * Return the minimim number of mutations needed to mutate from
 * startGene to endGene.
 * Return -1 if there is no such mutation.
 *
 * @param startGene start gene, 8-character long string
 * @param endGene end gene, 8-character long string
 * @param bank gene bank of valid genes
 */
function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const geneSet = ['A','C','G','T'];
    const q: [string, number][] = [[startGene, 0]];
    const seen: Set<string> = new Set();
    seen.add(startGene);
    while (q.length > 0) {
        const geneEntry = q.shift()!;
        const gene = geneEntry[0];
        if (gene === endGene) return geneEntry[1];
        for(let i = 0; i < gene.length; i++) {
            for (let letter of geneSet.filter(x => x != gene[i])) {
                const copy = replaceAt(gene, i, letter);
                if(bank.indexOf(copy) != -1) {
                    if (!seen.has(copy)) {
                        seen.add(copy);
                        q.push([copy, geneEntry[1] + 1]);
                    }
                }
            }
        }
    }
    return -1;
};

function replaceAt(string: string, index: number, replacement: string) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}