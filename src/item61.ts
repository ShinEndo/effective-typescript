{
    interface ScatterProps {
        // データ
        xs: number[];
        ys: number[];

        // 表示
        xRange: [number,number];
        yRange: [number,number];
        color: string;

        // イベント
        onClick?: (x:number, y:number, index:number) => void;
    }
    function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps){
        for(const kStr in oldProps){
            const k = kStr as keyof ScatterProps;
            if(oldProps[k] !== newProps[k]) {
                if(k !== 'onClick') return true;
            }
        }
        return false;
    }
 }
{
    interface ScatterProps {
        // データ
        xs: number[];
        ys: number[];
    
        // 表示
        xRange: [number,number];
        yRange: [number,number];
        color: string;
    
        // イベント
        onClick?: (x:number, y:number, index:number) => void;
    } 
    const REQUIRES_UPDATE: Record<keyof ScatterProps, boolean> = {
        xs: true,
        ys: true,
        xRange: true,
        yRange: true,
        color: true,
        onClick: false,
    }
    function shouldUpdate(oldProps: ScatterProps, newProps: ScatterProps){
        for(const kStr in oldProps){
            const k = kStr as keyof ScatterProps;
            if(oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
                return true;
            }
        }
        return false;
    }
}
