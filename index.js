let fn = module.exports = function (t, isdebug) {
    t.fn = (tparam, tresult, body) => {
        t.type
            .assert(tparam)
            .assert(tresult);
        let f = (param) => tresult.parse(body(tparam.parse(param)));
        f.meta = {
            param: tparam,
            result: tresult
        }
        return f;
    }
}
fn.name = "fn";