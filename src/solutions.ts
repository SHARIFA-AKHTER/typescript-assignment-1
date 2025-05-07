//Problem-1-solution

export function formatString(input:string, toUpper: boolean = true): string{
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//Problem-2-solution

export function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter(item => item.rating>=4);
}

//Problem-3-solution
export function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.flat()
}
export function concatenateArraysReduce<T>(...arrays: T[][]): T[]{
    return arrays.reduce((acc, curr)=> acc.concat(curr),[])
}


