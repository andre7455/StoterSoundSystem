function isActive(array, id) {
    var length = array.length;
    for (var i = 0; i <= length; i++) {
        console.log("je song array word gechecked");
        if (array[i] == id) {
            return true;
        }
    }
    return false;
}