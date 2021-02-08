
(() => {
    interface ISearchFunc {
        (source: string, subString: string): boolean
    }
    const searchString: ISearchFunc = function (source: string, subString: string): boolean {
        return source.search(subString) > -1
    }

    console.log(searchString("abcdefg", 'c'))


})()
