import {DataTile} from "ol/source";
import {createXYZ} from "ol/tilegrid";

const tileIndexGradientDataTileSource: DataTile = new DataTile({
    tileGrid: createXYZ(),
    loader: async (z, x, y) => {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d')!;
        const gradient = ctx.createLinearGradient(0, 0, 256, 256);
        gradient.addColorStop(0, `hsl(${(z * 40) % 360}, 70%, 60%)`);
        gradient.addColorStop(1, `hsl(${(x * 10 + y * 5) % 360}, 70%, 40%)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = '#fff';
        ctx.font = '12px sans-serif';
        ctx.fillText(`Z:${z} X:${x} Y:${y}`, 10, 20);
        return canvas;
    },
});

export { tileIndexGradientDataTileSource };