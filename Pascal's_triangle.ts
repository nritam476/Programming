function getRow(rowIndex: number): number[] {
    let x=[1,1];
    for(let i=0;i<rowIndex-1;i++){
        
        
        let z=[]
        let y=0;
        z.push(1);
        for(let h=0;h<x.length-1;h++){
       
        z.push(x[h]+x[h+1]);
        
        
        }
        z.push(1);
        x=z;

    }

if(rowIndex==0){
return [1];
}
else if(rowIndex==1){
return [1,1];
}
else{
return x;
}
};

