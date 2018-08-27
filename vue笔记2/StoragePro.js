(function (root) {

    var storagePro = {
        set(name, value) {
            localStorage.setItem(name, value)
            return this
        },
        get(name) {

            if (Object.prototype.toString.call(name) === "[object Array]") {
                var obj = {};
                name.forEach(function (item, index) {
                    var data = localStorage.getItem(item)
                    obj[item] = data
                })
                return obj
            } else {
                return localStorage.getItem(name)
            }
        },
        remove(name) {
            if (Object.prototype.toString.call(name) === "[object Array]") {
                for (var i = 0; i < name.length; i++) {
                    localStorage.removeItem(name[i])
                }
            } else {
                localStorage.removeItem(name)
            }
        }
    }
    root.storagePro = storagePro
})(window)