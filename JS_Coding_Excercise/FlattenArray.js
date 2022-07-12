const flattenArray = (arr) => {
    return arr.reduce((acc, item) => {
        if(Array.isArray(item)){
            acc = acc.concat(flattenArray(item));
        }else{
            acc.push(item);
        }
        return acc;
    }, []);
}