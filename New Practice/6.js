const removekey = () => {
    const { [key]: omitted, ...res } = obj
    return res
};
console.log();