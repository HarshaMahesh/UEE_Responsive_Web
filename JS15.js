(function() {
    var n = "undefined",
        t = function(t) {
            return typeof t !== n
        },
        e = "js15.js",
        i = "",
        r = !1,
        o = !1,
        s = !1,
        a = !1,
        c = "0.2.1",
        _ = 25,
        u = "-",
        d = "_HISTATS_SID",
        f = "histats_custom_destDivProducer",
        p = function(n) {
            u += "_" + n
        };
    p(c);
    var v = function() {
            r && console.log.apply(this, arguments)
        },
        l = function(n, i) {
            var r = n || {};
            try {
                var o = i.document,
                    s = i.navigator,
                    a = i.screen,
                    c = i.Date,
                    u = i.Math,
                    d = function() {
                        return o
                    },
                    f = function() {
                        return d().getElementsByTagName("body")[0] || d().getElementsByTagName("head")[0]
                    },
                    p = function(n) {
                        return "function" == typeof n
                    },
                    l = function(n) {
                        return t(n) && n instanceof Array
                    },
                    m = function(n) {
                        return t(n) && !!d().getElementById(n)
                    },
                    h = function(n) {
                        var e = !1;
                        if (t(n)) {
                            if ("NaN" == parseInt(n)) return !1;
                            e = parseInt(n) > 0
                        }
                        return e
                    },
                    y = function(n) {
                        return h(n) ? parseInt(n) : 0
                    },
                    g = function(n) {
                        return "string" != typeof n || n.length < 1 ? n : n.replace(/^['"]?(.*)['"]$/, "$1")
                    },
                    w = parseInt(1e4 * u.random()) + 1,
                    I = "histats_counter",
                    T = function(n, e, i) {
                        if (!t(n)) return t(i) && i(n), void 0;
                        for (var r in n) n.hasOwnProperty(r) && e(r, n[r], n)
                    },
                    H = 0,
                    C = function() {
                        H++
                    },
                    E = function(n) {
                        return "string" == typeof n
                    },
                    b = function(n) {
                        var e = !1;
                        return t(n) && E(n) && (e = (n + "").length > 0), e
                    },
                    S = "1000",
                    R = "0",
                    O = "0.php?";
                r.o_i = 0, r.ver = 16, r.eve = 3, r.cver = 0, r.s_id = 0, r.s_pd = 0, r.d_op = 0, r.i_dom = 4, r.i_id = 0, r.i_w = 0, r.i_h = 0, r.i_b = "", r.s_d = "", r.s_u = "", r.s_l = "0", r.s_t = "", r.d_s = 0, r.d_fa = 0;
                var D = 0,
                    A = 0;
                r.d_tf = 0, r.d_nv = 1, r.d_mu = 0, r.d_cv = 0, r.d_cs = 0, r.d_cp = 0, r.d_pON = 0;
                var B = 45e3;
                r.d_ca = 0, r.d_pn = 0, r.d_pt = 0, r.f_pv = 0, r.s_ta = "", r.a_va = [], r.s_ti = "", r.asi = 0, r.o_fa = 0, r.o_de = 0, r.o_BC = 0, r.o_fr = 0, r.p_ff = 0, r.n_a = "", r.n_f = 0, r.n_n = 0, r.o_n = 0;
                var U = 31536e6;
                r.c_on = 0, r.s_sc1 = "1", r.s_sc2 = "11111111", r.s_asc2 = {};
                var j = function() {
                        return r.i_id
                    },
                    F = function(n) {
                        r.i_id = y(n)
                    },
                    N = function() {
                        return 700 == j() || 0 == j()
                    },
                    G = function() {
                        var n = j();
                        return !N() && n > 0 && n < 5e3
                    },
                    x = function() {
                        return j() >= 8e3 && j() < 9e3
                    },
                    k = function() {
                        return j() >= 1e4 && j() < 10100
                    },
                    L = function() {
                        return j() >= 500 && j() < 600
                    },
                    q = function(n) {
                        artificialFrameRequestReference = i.setTimeout(n, 1e3 / _)
                    },
                    P = i.requestAnimationFrame || i.webkitRequestAnimationFrame || i.mozRequestAnimationFrame || i.msRequestAnimationFrame || i.oRequestAnimationFrame || q,
                    M = function() {
                        return 1 == r.asi || "1" == r.asi
                    },
                    J = function() {
                        r.asi = 1
                    },
                    z = "";
                r.fasi = function(n) {
                    r.asi = n
                };
                var W = function() {
                        try {
                            return "https:" === o.location.protocol ? "https://" : "http://"
                        } catch (n) {
                            return "http://"
                        }
                    },
                    $ = function() {
                        return "s10.histats.com"
                    },
                    K = function() {
                        return "s10.histats.com"
                    },
                    V = function() {
                        return "s" + r.i_dom + ".histats.com"
                    },
                    Q = function() {
                        return "s" + r.i_dom + "i.histats.com"
                    },
                    X = function(n) {
                        d().writeln('<script type="text/javascript" language="JavaScript" src="' + n + '"></script>')
                    },
                    Y = function(n) {
                        return '<script type="text/javascript" language="JavaScript" >document.writeln(\'' + n + "');</script>"
                    },
                    Z = function(n) {
                        d().writeln(Y(n))
                    },
                    nn = function(n) {
                        d().write(n)
                    },
                    tn = function() {
                        var n = '<div id="' + Hn() + '" style="display: none;"></div>';
                        nn(n), I = Hn()
                    },
                    en = function() {
                        var n = d().createElement("div");
                        n.id = Hn();
                        var t = d().getElementById("histats_counter");
                        t ? t.appendChild(n) : v("err_10")
                    },
                    rn = function(n, t) {
                        var e = d().createElement("script");
                        try {
                            e.async = !0
                        } catch (i) {}
                        e.type = "text/javascript", e.src = n, e && "function" == typeof t && (e.readyState ? e.onreadystatechange = function() {
                            var n = e.readyState;
                            ("loaded" == n || "complete" == n || parseInt(n) > 1) && (e.onreadystatechange = null, t())
                        } : e.onload = function() {
                            t()
                        }), f().appendChild(e)
                    },
                    on = function() {
                        return 1 == r.p_ff
                    },
                    sn = function() {
                        return r.p_ff = 1
                    },
                    an = function() {
                        return r.o_fa > 0
                    },
                    cn = function() {
                        return r.o_fa = 1
                    };
                r.is = t, r.isd = h;
                var _n = function() {
                        return r.s_id
                    },
                    un = function() {
                        return _n() < 1
                    },
                    dn = function(n) {
                        r.s_id = y(n)
                    },
                    fn = function() {
                        return pn(_n())
                    },
                    pn = function(n) {
                        return h(n)
                    },
                    vn = function(n) {
                        if (m(n)) return d().getElementById(n)
                    },
                    ln = function() {
                        return vn(En()) || vn(Hn())
                    },
                    mn = function() {
                        return vn(Hn()) || vn(En())
                    },
                    hn = function() {
                        var n = mn();
                        return n && (n.style.display = "block"), n
                    },
                    yn = function(n) {
                        try {
                            var t = hn();
                            if (t) return t.innerHTML = n, !0
                        } catch (e) {}
                        return !1
                    },
                    gn = function(n) {
                        try {
                            var t = ln();
                            if (t) return t.style.display = "block", t.innerHTML = n, !0
                        } catch (e) {}
                        return !1
                    },
                    wn = function(n) {
                        return n.id
                    },
                    In = function(n, t) {
                        var e = (t + "").match("(^|;)\\s*" + n + "\\s*=\\s*([^;]+)");
                        return e ? e.pop() : ""
                    },
                    Tn = function(n) {
                        return In(n, d().cookie)
                    },
                    Hn = function() {
                        return "histats_counter_" + w
                    },
                    Cn = function() {
                        return "histats_counter_" + _n() + "_" + j()
                    },
                    En = function() {
                        return "histats_counter"
                    };
                r.GC = Tn;
                var bn = function(n) {
                        var t = n + _n();
                        return Tn(t)
                    },
                    Sn = function(n) {
                        return b(n) ? i.encodeURIComponent ? i.encodeURIComponent(n) : i.escape(n).split("@").join("%40") : ""
                    };
                r.ENCODE = Sn;
                var Rn = function(n) {
                    if (!b(n)) return "";
                    try {
                        return i.decodeURIComponent ? i.decodeURIComponent(n) : i.unescape(n)
                    } catch (t) {
                        try {
                            return unescape(n)
                        } catch (t) {
                            v(t, n)
                        }
                    }
                };
                r.DECODE = Rn;
                var On = function(n) {
                    try {
                        return i.decodeURIComponent ? i.decodeURIComponent(n) : n
                    } catch (t) {
                        return v(t, n), n
                    }
                };
                r.DECODEuri = On;
                var Dn = function(n, t, e) {
                        try {
                            if (r.o_BC) return "";
                            var i, o;
                            o = new c, o.setTime(o.getTime() + e), i = e > 0 ? "; expires=" + o.toGMTString() : "; expires=Thu, 01-Jan-1970 00:00:01 GMT", d().cookie = n + "=" + t + i + "; path=/"
                        } catch (s) {
                            v(this, s)
                        }
                    },
                    An = function(n, t) {
                        return Dn(n + _n(), t, U)
                    },
                    Bn = function(n) {
                        Dn(n, "", -1)
                    };
                r.SC = Dn, r.framed_page = function() {
                    r.o_fr = 1
                }, r.start = function(n, t, e, i, o, s, a) {
                    dn(t), r.i_dom = e, F(i), r.i_w = o, r.i_h = s, r.s_sc2 = a, (r.s_sc2.length > 8 || r.s_sc2.length < 1) && (r.s_sc2 = "")
                }, r.init = function() {
                    if (!r.o_i) {
                        ++r.o_i;
                        var n = new i.Date;
                        r.o_n = n.getTime(), r.n_a = s.appName, ("Opera" === r.n_a || s.userAgent.indexOf("Firefox") >= 0) && (r.n_f = 1), r.s_u = d().URL ? d().URL : d().location, r.s_u = On(r.s_u).substr(0, 500), S = d().referrer + "", r.s_ti = d().title, r.s_ti = On(r.s_ti).substr(0, 500);
                        var t = -1;
                        try {
                            r.d_s = a.width, r.o_fr && i.top != i.self && (S = "" + i.top.document.referrer), r.s_l = s["language"] || s.browserLanguage || "", "lt" == r.s_l.substr(0, 2) && (r.s_l = "lT"), "gt" == r.s_l.substr(0, 2) && (r.s_l = "gT"), r.s_l.length < 1 && (r.s_l = "0"), t = S.indexOf("//" + d().location.host)
                        } catch (e) {
                            r.s_l = "0", S = "1000", r.d_s = "0"
                        }
                        if (r.d_s = y(r.d_s), S = S.substr(0, 500), D = y(bn("HstCla")), r.d_fa = y(bn("HstCfa")), y(bn("NoHits") > 0) && cn(), r.d_fa < 1 && (r.d_fa = r.o_n, An("HstCfa", r.d_fa)), r.d_nv = 1, An("HstCla", r.o_n), r.c_on = y(bn("HstCla")), r.c_on > 0) {
                            D > 0 && (A = parseInt(r.o_n - D)), r.d_fa > 0 && (r.d_tf = parseInt(r.o_n - r.d_fa)), r.d_pn = y(bn("HstPn")), r.d_pt = y(bn("HstPt")), r.d_cv = y(bn("HstCnv")), r.d_cs = y(bn("HstCns")), r.d_mu = y(bn("HstCmu")), r.d_pn++, r.d_pt++;
                            var o = 1e3,
                                c = 3600 * o,
                                _ = 24 * c * 30.4,
                                u = 600 * o,
                                f = 45 * o;
                            parseInt(r.o_n - r.d_mu) >= _ && (An("HstCmu", r.o_n), r.d_mu = 0), r.d_mu++, D < 1 || A >= _ ? (r.d_pn = 1, r.d_cv = 1, r.d_pt = 1, r.d_cs = 1) : A > 0 && (A < c ? r.d_nv = 0 : (r.d_pn = 1, r.d_cv++), A > u && r.d_cs++), r.d_cv < 1 && (r.d_cv = 1), 1 == r.d_nv && i.setTimeout(function() {
                                r.track_event("b")
                            }, f), An("HstPn", r.d_pn), An("HstPt", r.d_pt), An("HstCnv", r.d_cv), An("HstCns", r.d_cs)
                        }
                        b(S) && 1 == r.d_nv && t < 1 ? An("c_ref_", Sn(S)) : (b(Rn(Tn("c_ref_" + _n()))) && (S = Rn(Tn("c_ref_" + _n()))), b(S) || (S = "1000")), r.d_op = Tn("c_pd_" + _n()), h(r.d_op) || (r.d_op = 0), r.s_pd > 0 && An("c_pd_", r.s_pd)
                    }
                };
                var Un = function() {
                    r.init(), R = "" + (_n() + "") + ("&@f" + r.ver) + ("&@g" + r.d_nv) + ("&@h" + r.d_pn) + ("&@i" + r.d_cv) + ("&@j" + r.c_on) + ("&@k" + A) + ("&@l" + r.d_pt) + ("&@m" + Sn(r.s_ti)) + ("&@n" + r.imp_v()) + ("&@o" + Sn(S)) + ("&@q" + r.s_pd) + ("&@r" + r.d_op) + ("&@s" + j()) + ("&@t" + Sn(r.s_l)) + ("&@u" + r.d_s) + ("&@v" + Sn(r.s_u))
                };
                r.add_v = function(n, t) {
                    b(n) && b(t) && ("tags" == n && (t = t.split(";").join(",")), r.a_va[y(r.a_va.length)] = Sn(n) + "=" + Sn(t))
                }, r.imp_v = function() {
                    var n = "0";
                    if ("undefined" != typeof i.Histats_variables) {
                        var t = i.Histats_variables;
                        if (t.length > 0 && t.length % 2 == 0)
                            for (var e = 0; e < t.length;) r.add_v(t[e], t[e + 1]), e += 2
                    }
                    var o = r.a_va.length;
                    return o < 1 ? n : (n += r.a_va.join("|"), n.substr(0, 300))
                };
                var jn = function() {
                    if (h(r.i_dom) && !un()) {
                        var n = W() + V() + "/stats/" + O + R + "&@w";
                        M() ? en() : tn(), rn(n)
                    }
                };
                r.load_JScall = jn, r.mlare = function(n, t) {}, r.load_GIFimg = C, r.load_GIFicon = C, r.load_gifImgOrTopImg = r.load_GIFimg, r.track_hits = function() {
                    an() || (Un(), k() ? (O = "i/" + _n() + ".gif?", r.load_gifImgOrTopImg()) : x() ? (O = j() + ".gif?", r.load_GIFicon()) : N() || L() ? (Gn("1"), O = "0.php?", jn(), Xn()) : (O = _n() + ".php?", jn()))
                }, r.track_event = function(n) {
                    r.d_ca > 100 || (R = "" + (_n() + "") + ("&@A" + n + "&@R" + u.ceil(1e5 * u.random())), O = "e.php?", J(), jn(), r.d_ca++)
                };
                var Fn = function(n) {
                        Gn(n), Xn()
                    },
                    Nn = function(n) {
                        zn(n), Xn()
                    };
                i.chfh = Fn, i.chfh2 = Nn;
                var Gn = function(n) {
                        E(n) && (r.s_sc1 = n)
                    },
                    xn = function(n) {
                        var t = {};
                        n = g(n);
                        try {
                            if (E(n))
                                for (var e = /([0-9]+)([^=]+)=([^#]+)/g, i, r = 1; r++ < 100 && null != (i = e.exec(n));) 4 == i.length && (t[i[1]] = i[2] + "=" + i[3])
                        } catch (o) {
                            v(this, o)
                        }
                        return t
                    },
                    kn = function() {
                        return b(r.s_sc2) ? ("" + r.s_sc2).split("") : []
                    },
                    Ln = function(n, t) {
                        var e = "";
                        for (var i in n) "1" == n[i] && t[i] && (e = e + t[i] + "#");
                        return e
                    },
                    qn = function(n, t) {
                        var e = [];
                        for (var i in n)
                            if ("1" == n[i] && t[i]) {
                                var r = t[i].split("=", 2);
                                e.push({
                                    name: r[0],
                                    value: r[1]
                                })
                            }
                        return e
                    },
                    Pn = function(n) {
                        return "_HistatsCounterGraphics_" + n
                    },
                    Mn = function(n) {
                        var t = Pn(j()) + "_setValues";
                        i[t] = n
                    },
                    Jn = function(n) {
                        return W() + K() + "/counters/cc_" + n + ".js"
                    },
                    zn = function(n) {
                        r.s_asc2 = xn(n);
                        var t = kn();
                        r.s_sc1 = Ln(t, r.s_asc2), Mn(qn(t, r.s_asc2))
                    };
                r.sc1 = zn, i._HST_cntval || (i._HST_cntval = "");
                var Wn = {
                        counterObjInstance: void 0
                    },
                    $n = function() {
                        return {
                            main_div_name: Hn(),
                            siteId: _n()
                        }
                    },
                    Kn = function() {
                        var n = Jn(j());
                        rn(n, function() {
                            var n = i[Pn(j())],
                                t = hn();
                            t && (Wn.counterObjInstance = n($n(), i), null != Wn.counterObjInstance && Wn.counterObjInstance.start())
                        })
                    },
                    Vn = function(n) {
                        return n > 0 && n < 400
                    },
                    Qn = function() {
                        "undefined" != typeof st_dominio && h(st_dominio) && (r.i_dom = st_dominio), "undefined" != typeof cimg && h(cimg) && F(cimg), "undefined" != typeof cwi && h(cwi) && (r.i_w = cwi), "undefined" != typeof che && h(che) && (r.i_h = che), "undefined" != typeof s_sid && h(s_sid) && dn(s_sid), "undefined" != typeof zstpagid && h(zstpagid) && (r.s_pd = zstpagid), "undefined" != typeof uhist && h(uhist) && (r.o_BC = 1), "undefined" != typeof ExFd && h(ExFd) && r.framed_page()
                    };
                r.oldcode_start = Qn;
                var Xn = function() {
                    G() && !on() && (sn(), Kn())
                };
                r.load_flash = Xn, r.filename = e
            } catch (Yn) {}
            return r
        };
    i += "__ALLJS__", i += "_NOTGIF_";
    var m = window["Histats"] || {},
        h = window,
        y = "_DEBUG_HISTATS_RESET_PARENT",
        g = "_DEBUG_HISTATS_USE_MOCKED_WINDOW",
        w = "_DEBUG_HISTATS_RETURN_BUILDER",
        I = "_DEBUG_HISTATS_forced";
    o = t(window[y]) && 1 == window[y], s = t(window[g]) && window[g] === !0, a = t(window[w]) && window[w] === !0, r = t(window[I]) && window[I] === !0, r = r || o || s, r && (window["histats_counters_byType"] = window["histats_counters_byType"] || {}, window["histats_counters_byType"][i] = window["histats_counters_byType"][i] || [], window["histats_counters_byType"][i].push(e)), o && (m = {}), s && (h = window["mocked_window"]), r ? a ? window["histatsByName_" + e] = l : window["histatsByName_" + e] = l(m, h) : window["Histats"] = l(m, h)
}).call(this);