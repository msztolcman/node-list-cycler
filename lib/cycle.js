module.exports = function(list, startIdx) {
    return new Cycle(list, startIdx);
}

function Cycle(list, startIdx) {
    if (!list || list.length == 0) {
        throw new Error('Array must be at least 1 element long.');
    }

    this._list = list;

    if (typeof startIdx == 'undefined') {
        this._idx = 0;
    }
    else {
        this._idx = startIdx;
    }

    if (this._list.length == 1) {
        this.next = _nextSingle.bind(this);
    }
    else {
        this.next = _nextMmulti.bind(this);
    }
}

function _nextMmulti() {
    var ret = this._list[this._idx];

    ++this._idx;
    if (this._idx >= this._list.length) {
        this._idx = 0;
    }

    return ret;
}

function _nextSingle() {
    return this._list[0];
}