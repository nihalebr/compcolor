/**
 * @author nihalebr
 * 
 * based on the interval,it will retuern the complmentary color in different type(Complementary:1,Split Complementary:60,Triadic:120,Tetradic:90,analogous:30)
 * 
 * @param  {string} color - color in HSL format
 * @param  {int} start - start of the degree
 * @param  {int} end - end of the degree
 * @param  {int} interval - interval of the degree
 */
function harmonize(color, start, end, interval) {
    const colors = [color]
    const [h, s, l] = parseHSL(color)

    for (let i = start; i <= end; i += interval) {
        const h1 = (h + i) % 360
        const c1 = `hsl(${h1}, ${s}%, ${l}%)`
        colors.push(c1)
    }

    return colors
}
/**
 * it will return the number part of the color
 * @param  {string} color - color in HSL format
 * @returns [h, s, l] - array of number
 */
function parseHSL(color) {
    var hsl, h, s, l
    hsl = color.replace(/[^\d,]/g, '').split(',')
    h = Number(hsl[0])
    s = Number(hsl[1])
    l = Number(hsl[2])
    return [h, s, l]
}
console.time('End');
const hue = Math.floor(Math.random() * 360);
const saturation = Math.floor(Math.random() * (100 + 1)) + "%";
const lightness = Math.floor(Math.random() * (100 + 1)) + "%";
const colr = `hsl(${hue}, ${saturation}, ${lightness})`;
const colors = harmonize(colr, 180, 180, 1);
console.table(colors);
console.timeEnd('End');