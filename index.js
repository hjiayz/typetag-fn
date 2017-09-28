module.exports = function (t, isdebug) {
    t.fn = (tparam, tresult, body) => {
        t.type
            .assert(tparam)
            .assert(tresult);
        let f = (param) => {
            tparam.assert(param);
            let res = body(param);
            tresult.assert(res);
            return res;
        }
        f.meta = {
            param: tparam,
            result: tresult
        }
        return f;
    }
}