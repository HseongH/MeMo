const Memo = {
    createObject: objname => {
        let parent = Memo;
        let newObj = objname.split('.');

        if (newObj[0] === 'Memo') {
            newObj = newObj.slice(1);
        }

        const loop = newObj.length;

        for (let i = 0; i < loop; i++) {
            if (!parent[newObj[i]]) {
                parent[newObj[i]] = {};
            }
            parent = parent[newObj[i]];
        }

        return parent;
    }
};
