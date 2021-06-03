export = async (url?: string) => {
    if(!url || (typeof (url) !=="string")) throw new ReferenceError('An invalid url was provided.')
}