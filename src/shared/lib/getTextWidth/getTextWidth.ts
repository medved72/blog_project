export function getTextWidth(
    text: string,
    font: { size: number; name: string }
): number {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (context) {
        context.font = `${font.size}px ${font.name}`
        return context.measureText(text).width
    }
    return 0
}
