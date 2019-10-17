// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [[], []]

    };
    var aa, ba = this || self,
    ca = /^[\w+/_ - ] + [ = ] {
        0,
        2
    }
    $ / , fa = null;
    var ha = function() {},
    ia = function(a) {
        return "function" == typeof a
    },
    ja = function(a) {
        return "string" == typeof a
    },
    ka = function(a) {
        return "number" == typeof a && !isNaN(a)
    },
    la = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    },
    f = function(a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c: -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return - 1
    },
    ma = function(a, b) {
        if (a && la(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    },
    na = function(a, b) {
        if (!ka(a) || !ka(b) || a > b) a = 0,
        b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    },
    qa = function(a, b) {
        for (var c = new oa,
        d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++) if (c.get(b[e])) return ! 0;
        return ! 1
    },
    ra = function(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    sa = function(a) {
        return Math.round(Number(a)) || 0
    },
    ta = function(a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    },
    ua = function(a) {
        var b = [];
        if (la(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    },
    va = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    wa = function() {
        return (new Date).getTime()
    },
    oa = function() {
        this.prefix = "gtm.";
        this.values = {}
    }; oa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }; oa.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }; oa.prototype.contains = function(a) {
        return void 0 !== this.get(a)
    };
    var xa = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    },
    ya = function(a) {
        var b = !1;
        return function() {
            if (!b) try {
                a()
            } catch(c) {}
            b = !0
        }
    },
    za = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Ca = function(a) {
        for (var b in a) if (a.hasOwnProperty(b)) return ! 0;
        return ! 1
    },
    Da = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]),
        c.push.apply(c, b[a[d]] || []);
        return c
    };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ea = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Fa = function(a) {
        if (null == a) return String(a);
        var b = Ea.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    },
    Ga = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Ha = function(a) {
        if (!a || "object" != Fa(a) || a.nodeType || a == a.window) return ! 1;
        try {
            if (a.constructor && !Ga(a, "constructor") && !Ga(a.constructor.prototype, "isPrototypeOf")) return ! 1
        } catch(c) {
            return ! 1
        }
        for (var b in a);
        return void 0 === b || Ga(a, b)
    },
    v = function(a, b) {
        var c = b || ("array" == Fa(a) ? [] : {}),
        d;
        for (d in a) if (Ga(a, d)) {
            var e = a[d];
            "array" == Fa(e) ? ("array" != Fa(c[d]) && (c[d] = []), c[d] = v(e, c[d])) : Ha(e) ? (Ha(c[d]) || (c[d] = {}), c[d] = v(e, c[d])) : c[d] = e
        }
        return c
    };
    var fb;
    var gb = [], hb = [], jb = [], kb = [], lb = [], mb = {},
    nb, ob, qb, rb = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    },
    sb = function(a, b) {
        var c = a["function"];
        if (!c) throw Error("Error: No function name given for function call.");
        var d = !!mb[c],
        e = {},
        g;
        for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g: g.substr(4)] = a[g]);
        return d ? mb[c](e) : fb(c, e, b)
    },
    ub = function(a, b, c) {
        c = c || [];
        var d = {},
        e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = tb(a[e], b, c));
        return d
    },
    vb = function(a) {
        var b = a["function"];
        if (!b) throw "Error: No function name given for function call.";
        var c = mb[b];
        return c ? c.priorityOverride || 0 : 0
    },
    tb = function(a, b, c) {
        if (la(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++) d.push(tb(a[e], b, c));
                return d;
            case "macro":
                var g = a[1];
                if (c[g]) return;
                var h = gb[g];
                if (!h || b.Bc(h)) return;
                c[g] = !0;
                try {
                    var k = ub(h, b, c);
                    k.vtp_gtmEventId = b.id;
                    d = sb(k, b);
                    qb && (d = qb.Hf(d, k))
                } catch(w) {
                    b.Zd && b.Zd(w, Number(g)),
                    d = !1
                }
                c[g] = !1;
                return d;
            case "map":
                d = {};
                for (var l = 1; l < a.length; l += 2) d[tb(a[l], b, c)] = tb(a[l + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var m = !1,
                n = 1; n < a.length; n++) {
                    var p = tb(a[n], b, c);
                    ob && (m = m || p === ob.wb);
                    d.push(p)
                }
                return ob && m ? ob.Kf(d) : d.join("");
            case "escape":
                d = tb(a[1], b, c);
                if (ob && la(a[1]) && "macro" === a[1][0] && ob.lg(a)) return ob.xg(d);
                d = String(d);
                for (var t = 2; t < a.length; t++) Ia[a[t]] && (d = Ia[a[t]](d));
                return d;
            case "tag":
                var q = a[1];
                if (!kb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                return d = {
                    Ld: a[2],
                    index: q
                };
            case "zb":
                var r = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                r["function"] = a[1];
                var u = wb(r, b, c);
                a[4] && (u = !u);
                return u;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    },
    wb = function(a, b, c) {
        try {
            return nb(ub(a, b, c))
        } catch(d) {
            JSON.stringify(a)
        }
        return null
    };
    var xb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            dd: a("convert_case_to"),
            ed: a("convert_false_to"),
            fd: a("convert_null_to"),
            gd: a("convert_true_to"),
            hd: a("convert_undefined_to"),
            eh: a("debug_mode_metadata"),
            ia: a("function"),
            Ue: a("instance_name"),
            Ve: a("live_only"),
            We: a("malware_disabled"),
            Xe: a("metadata"),
            gh: a("original_vendor_template_id"),
            Ye: a("once_per_event"),
            zd: a("once_per_load"),
            Ad: a("setup_tags"),
            Bd: a("tag_id"),
            Cd: a("teardown_tags")
        }
    } ();
    var yb = null,
    Bb = function(a) {
        function b(p) {
            for (var t = 0; t < p.length; t++) d[p[t]] = !0
        }
        var c = [],
        d = [];
        yb = zb(a);
        for (var e = 0; e < hb.length; e++) {
            var g = hb[e],
            h = Ab(g);
            if (h) {
                for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(g.block || [])
            } else null === h && b(g.block || [])
        }
        for (var m = [], n = 0; n < kb.length; n++) c[n] && !d[n] && (m[n] = !0);
        return m
    },
    Ab = function(a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = yb(b[c]);
            if (!d) return null === d ? null: !1
        }
        for (var e = a.unless || [], g = 0; g < e.length; g++) {
            var h = yb(e[g]);
            if (null === h) return null;
            if (h) return ! 1
        }
        return ! 0
    },
    zb = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = wb(jb[c], a));
            return b[c]
        }
    };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    for (var Eb = "floor ceil round max min abs pow sqrt".split(" "), Fb = 0; Fb < Eb.length; Fb++) Math.hasOwnProperty(Eb[Fb]);
    var C = window,
    D = document,
    Gb = navigator,
    Hb = D.currentScript && D.currentScript.src,
    Ib = function(a, b) {
        var c = C[a];
        C[a] = void 0 === c ? b: c;
        return C[a]
    },
    Jb = function(a, b) {
        b && (a.addEventListener ? a.onload = b: a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    },
    Kb = function(a, b, c) {
        var d = D.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        d.src = a;
        Jb(d, b);
        c && (d.onerror = c);
        var e;
        if (null === fa) b: {
            var g = ba.document,
            h = g.querySelector && g.querySelector("script[nonce]");
            if (h) {
                var k = h.nonce || h.getAttribute("nonce");
                if (k && ca.test(k)) {
                    fa = k;
                    break b
                }
            }
            fa = ""
        }
        e = fa;
        e && d.setAttribute("nonce", e);
        var l = D.getElementsByTagName("script")[0] || D.body || D.head;
        l.parentNode.insertBefore(d, l);
        return d
    },
    Lb = function() {
        if (Hb) {
            var a = Hb.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    },
    Mb = function(a, b) {
        var c = D.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        var d = D.body && D.body.lastChild || D.body || D.head;
        d.parentNode.insertBefore(c, d);
        Jb(c, b);
        void 0 !== a && (c.src = a);
        return c
    },
    Nb = function(a, b, c) {
        var d = new Image(1, 1);
        d.onload = function() {
            d.onload = null;
            b && b()
        };
        d.onerror = function() {
            d.onerror = null;
            c && c()
        };
        d.src = a;
        return d
    },
    Ob = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    Pb = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    G = function(a) {
        C.setTimeout(a, 0)
    },
    Qb = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value: null
    },
    Rb = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    },
    Sb = function(a) {
        var b = D.createElement("div");
        b.innerHTML = "A<div>" + a + "</div>";
        b = b.lastChild;
        for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
        return c
    },
    Tb = function(a, b, c) {
        c = c || 100;
        for (var d = {},
        e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var g = a,
        h = 0; g && h <= c; h++) {
            if (d[String(g.tagName).toLowerCase()]) return g;
            g = g.parentElement
        }
        return null
    },
    Ub = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    };
    var H = {
        vb: "_ee",
        Zb: "event_callback",
        Ma: "event_timeout",
        L: "gtag.config",
        P: "allow_ad_personalization_signals",
        S: "cookie_expires",
        Ka: "cookie_update",
        va: "session_duration"
    }; H.Xb = "page_view", H.ue = "user_engagement", H.ve = "allow_custom_scripts", H.we = "allow_display_features", H.xe = "allow_enhanced_conversions", H.ob = "client_id", H.R = "cookie_domain", H.pb = "cookie_name", H.qa = "cookie_path", H.da = "currency", H.La = "custom_params", H.Ae = "custom_map", H.cc = "groups", H.ra = "language", H.ze = "country", H.fh = "non_interaction", H.Qa = "page_location", H.Ra = "page_referrer", H.gc = "page_title", H.Sa = "send_page_view", H.sa = "send_to", H.hc = "session_engaged", H.sb = "session_id", H.ic = "session_number", H.Re = "tracking_id", H.ub = "user_properties", H.fa = "linker", H.Na = "accept_incoming", H.B = "domains", H.Pa = "url_position", H.Oa = "decorate_forms", H.vd = "phone_conversion_number", H.td = "phone_conversion_callback", H.ud = "phone_conversion_css_class", H.wd = "phone_conversion_options", H.Ne = "phone_conversion_ids", H.Me = "phone_conversion_country_code", H.jd = "aw_remarketing", H.kd = "aw_remarketing_only", H.Z = "value", H.Oe = "quantity", H.De = "affiliation", H.He = "tax", H.Ge = "shipping", H.Yb = "list_name", H.sd = "checkout_step", H.rd = "checkout_option", H.Ee = "coupon", H.Fe = "promotions", H.Ta = "transaction_id", H.Ua = "user_id", H.Ja = "conversion_linker", H.Ia = "conversion_cookie_prefix", H.T = "cookie_prefix", H.Y = "items", H.od = "aw_merchant_id", H.md = "aw_feed_country", H.nd = "aw_feed_language", H.ld = "discount", H.qd = "disable_merchant_reported_purchases", H.fc = "new_customer", H.pd = "customer_lifetime_value", H.Ce = "dc_natural_search", H.Be = "dc_custom_params", H.Se = "trip_type", H.Le = "passengers", H.Je = "method", H.Qe = "search_term", H.ye = "content_type", H.Ke = "optimize_id", H.Ie = "experiments", H.rb = "google_signals", H.bc = "google_tld", H.tb = "update", H.ac = "firebase_id", H.qb = "ga_restrict_domain", H.$b = "event_settings", H.Pe = "screen_name", H.Te = [H.P, H.R, H.S, H.pb, H.qa, H.T, H.Ka, H.La, H.Zb, H.$b, H.Ma, H.qb, H.rb, H.bc, H.cc, H.fa, H.sa, H.Sa, H.va, H.tb, H.ub], H.xd = [H.Qa, H.Ra, H.gc, H.ra, H.Pe, H.Ua, H.ac], H.cd = [H.sa, H.jd, H.kd, H.La, H.Sa, H.ra, H.Z, H.da, H.Ta, H.Ua, H.Ja, H.Ia, H.T, H.Qa, H.Ra, H.vd, H.td, H.ud, H.wd, H.Y, H.od, H.md, H.nd, H.ld, H.qd, H.fc, H.pd, H.P, H.tb, H.ac];
    var ic = /[A-Z]+/,
    jc = /\s/,
    kc = function(a) {
        if (ja(a) && (a = va(a), !jc.test(a))) {
            var b = a.indexOf("-");
            if (! (0 > b)) {
                var c = a.substring(0, b);
                if (ic.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {
                        id: a,
                        prefix: c,
                        containerId: c + "-" + d[0],
                        h: d
                    }
                }
            }
        }
    },
    mc = function(a) {
        for (var b = {},
        c = 0; c < a.length; ++c) {
            var d = kc(a[c]);
            d && (b[d.id] = d)
        }
        lc(b);
        var e = [];
        ra(b,
        function(g, h) {
            e.push(h)
        });
        return e
    };
    function lc(a) {
        var b = [],
        c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.h[1] && b.push(d.containerId)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var nc = {},
    oc = null,
    pc = Math.random(); nc.m = ""; nc.Ab = "a21";
    var qc = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0,
        __paused: !0
    },
    rc = "www.googletagmanager.com/gtm.js"; rc = "www.googletagmanager.com/gtag/js";
    var sc = rc,
    tc = null,
    uc = null,
    vc = null,
    wc = "//www.googletagmanager.com/a?id=" + nc.m + "&cv=1",
    xc = {},
    yc = {},
    zc = function() {
        var a = oc.sequence || 0;
        oc.sequence = a + 1;
        return a
    };
    var Ac = {},
    Bc = function(a, b) {
        Ac[a] = Ac[a] || [];
        Ac[a][b] = !0
    },
    Cc = function(a) {
        for (var b = [], c = Ac[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("")
    };
    var Dc = function() {
        return "&tc=" + kb.filter(function(a) {
            return a
        }).length
    },
    Oc = function() {
        Ec && (C.clearTimeout(Ec), Ec = void 0);
        void 0 === Fc || Hc[Fc] && !Ic || (Jc[Fc] || Kc.ng() || 0 >= Lc--?(Bc("GTM", 1), Jc[Fc] = !0) : (Kc.Ig(), Nb(Mc()), Hc[Fc] = !0, Nc = Ic = ""))
    },
    Mc = function() {
        var a = Fc;
        if (void 0 === a) return "";
        var b = Cc("GTM"),
        c = Cc("TAGGING");
        return [Pc, Hc[a] ? "": "&es=1", Qc[a], b ? "&u=" + b: "", c ? "&ut=" + c: "", Dc(), Ic, Nc, "&z=0"].join("")
    },
    Rc = function() {
        return [wc, "&v=3&t=t", "&pid=" + na(), "&rv=" + nc.Ab].join("")
    },
    Sc = "0.005000" > Math.random(), Pc = Rc(), Tc = function() {
        Pc = Rc()
    },
    Hc = {},
    Ic = "", Nc = "", Fc = void 0, Qc = {},
    Jc = {},
    Ec = void 0, Kc = function(a, b) {
        var c = 0,
        d = 0;
        return {
            ng: function() {
                if (c < a) return ! 1;
                wa() - d >= b && (c = 0);
                return c >= a
            },
            Ig: function() {
                wa() - d >= b && (c = 0);
                c++;
                d = wa()
            }
        }
    } (2, 1E3), Lc = 1E3, Uc = function(a, b) {
        if (Sc && !Jc[a] && Fc !== a) {
            Oc();
            Fc = a;
            Ic = "";
            var c;
            c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
            Qc[a] = "&e=" + c + "&eid=" + a;
            Ec || (Ec = C.setTimeout(Oc, 500))
        }
    },
    Vc = function(a, b, c) {
        if (Sc && !Jc[a] && b) {
            a !== Fc && (Oc(), Fc = a);
            var d = String(b[xb.ia] || "").replace(/_/g, "");
            0 === d.indexOf("cvt") && (d = "cvt");
            var e = c + d;
            Ic = Ic ? Ic + "." + e: "&tr=" + e;
            Ec || (Ec = C.setTimeout(Oc, 500));
            2022 <= Mc().length && Oc()
        }
    };
    var Wc = {},
    Xc = new oa,
    Yc = {},
    Zc = {},
    cd = {
        name: "dataLayer",
        set: function(a, b) {
            v($c(a, b), Yc);
            ad()
        },
        get: function(a) {
            return bd(a, 2)
        },
        reset: function() {
            Xc = new oa;
            Yc = {};
            ad()
        }
    },
    bd = function(a, b) {
        if (2 != b) {
            var c = Xc.get(a);
            if (Sc) {
                var d = dd(a);
                c !== d && Bc("GTM", 5)
            }
            return c
        }
        return dd(a)
    },
    dd = function(a, b, c) {
        var d = a.split("."),
        e = !1,
        g = void 0;
        var h = function(k, l) {
            for (var m = 0; void 0 !== k && m < d.length; m++) {
                if (null === k) return ! 1;
                k = k[d[m]]
            }
            return void 0 !== k || 1 < m ? k: l.length ? h(ed(l.pop()), l) : fd(d)
        };
        e = !0;
        g = h(Yc.eventModel, [b, c]);
        return e ? g: fd(d)
    },
    fd = function(a) {
        for (var b = Yc,
        c = 0; c < a.length; c++) {
            if (null === b) return ! 1;
            if (void 0 === b) break;
            b = b[a[c]]
        }
        return b
    };
    var gd = function(a, b) {
        return dd(a, b, void 0)
    },
    ed = function(a) {
        if (a) {
            var b = fd(["gtag", "targets", a]);
            return Ha(b) ? b: void 0
        }
    },
    hd = function(a, b) {
        function c(g) {
            g && ra(g,
            function(h) {
                d[h] = null
            })
        }
        var d = {};
        c(Yc);
        delete d.eventModel;
        c(ed(a));
        c(ed(b));
        c(Yc.eventModel);
        var e = [];
        ra(d,
        function(g) {
            e.push(g)
        });
        return e
    };
    var id = function(a, b) {
        Zc.hasOwnProperty(a) || (Xc.set(a, b), v($c(a, b), Yc), ad())
    },
    $c = function(a, b) {
        for (var c = {},
        d = c,
        e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
        d[e[e.length - 1]] = b;
        return c
    },
    ad = function(a) {
        ra(Zc,
        function(b, c) {
            Xc.set(b, c);
            v($c(b, void 0), Yc);
            v($c(b, c), Yc);
            a && delete Zc[b]
        })
    },
    jd = function(a, b, c) {
        Wc[a] = Wc[a] || {};
        var d = 1 !== c ? dd(b) : Xc.get(b);
        "array" === Fa(d) || "object" === Fa(d) ? Wc[a][b] = v(d) : Wc[a][b] = d
    },
    kd = function(a, b) {
        if (Wc[a]) return Wc[a][b]
    };
    var ld = function() {
        var a = !1;
        return a
    };
    var L = function(a, b, c, d) {
        return (2 === md() || d || "http:" != C.location.protocol ? a: b) + c
    },
    md = function() {
        var a = Lb(),
        b;
        if (1 === a) a: {
            var c = sc;
            c = c.toLowerCase();
            for (var d = "https://" + c,
            e = "http://" + c,
            g = 1,
            h = D.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) {
                var l = h[k].src;
                if (l) {
                    l = l.toLowerCase();
                    if (0 === l.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === g && 0 === l.indexOf(d) && (g = 2)
                }
            }
            b = g
        } else b = a;
        return b
    };
    var od = function(a, b, c) {
        if (C[a.functionName]) return b.Kc && G(b.Kc),
        C[a.functionName];
        var d = nd();
        C[a.functionName] = d;
        if (a.Cb) for (var e = 0; e < a.Cb.length; e++) C[a.Cb[e]] = C[a.Cb[e]] || nd();
        a.Mb && void 0 === C[a.Mb] && (C[a.Mb] = c);
        Kb(L("https://", "http://", a.Uc), b.Kc, b.rg);
        return d
    },
    nd = function() {
        var a = function() {
            a.q = a.q || [];
            a.q.push(arguments)
        };
        return a
    },
    pd = {
        functionName: "_googWcmImpl",
        Mb: "_googWcmAk",
        Uc: "www.gstatic.com/wcm/loader.js"
    },
    qd = {
        functionName: "_gaPhoneImpl",
        Mb: "ga_wpid",
        Uc: "www.gstatic.com/gaphone/loader.js"
    },
    rd = {
        te: "",
        Ze: "1"
    },
    sd = {
        functionName: "_googCallTrackingImpl",
        Cb: [qd.functionName, pd.functionName],
        Uc: "www.gstatic.com/call-tracking/call-tracking_" + (rd.te || rd.Ze) + ".js"
    },
    td = {},
    ud = function(a, b, c, d) {
        Bc("GTM", 22);
        if (c) {
            d = d || {};
            var e = od(pd, d, a),
            g = {
                ak: a,
                cl: b
            };
            void 0 === d.X && (g.autoreplace = c);
            e(2, d.X, g, c, 0, new Date, d.options)
        }
    },
    vd = function(a, b, c) {
        Bc("GTM", 23);
        if (b) {
            c = c || {};
            var d = od(qd, c, a),
            e = {};
            void 0 !== c.X ? e.receiver = c.X: e.replace = b;
            e.ga_wpid = a;
            e.destination = b;
            d(2, new Date, e)
        }
    },
    wd = function(a, b, c, d) {
        Bc("GTM", 21);
        if (b && c) {
            d = d || {};
            for (var e = {
                countryNameCode: c,
                destinationNumber: b,
                retrievalTime: new Date
            },
            g = 0; g < a.length; g++) {
                var h = a[g];
                td[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.h.length ? (e.adData = {
                    ak: h.h[0],
                    cl: h.h[1]
                },
                td[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
                    gaWpid: h.containerId
                },
                td[h.id] = !0))
            } (e.gaData || e.adData) && od(sd, d)(d.X, e, d.options)
        }
    },
    xd = function() {
        var a = !1;
        return a
    },
    yd = function(a) {
        if (a) if (ld()) {} else {
            if (ja(a)) {
                var b = kc(a);
                if (!b) return;
                a = b
            }
            var c = function(y) {
                return dd(y, a.containerId, a.id)
            },
            d = void 0;
            var e = !1,
            g = c(H.Ne);
            if (g && la(g)) {
                d = [];
                for (var h = 0; h < g.length; h++) {
                    var k = kc(g[h]);
                    k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k.containerId) && (e = !0))
                }
            }
            if (d && !e) return;
            var l = c(H.vd),
            m;
            if (l) {
                m = la(l) ? l: [l];
                var n = c(H.td),
                p = c(H.ud),
                t = c(H.wd),
                q = c(H.Me),
                r = n || p,
                u = 1;
                "UA" !== a.prefix || d || (u = 5);
                for (var w = 0; w < m.length; w++) w < u && (d ? wd(d, m[w], q, {
                    X: r,
                    options: t
                }) : "AW" === a.prefix && a.h[1] ? xd() ? wd([a], m[w], q || "US", {
                    X: r,
                    options: t
                }) : ud(a.h[0], a.h[1], m[w], {
                    X: r,
                    options: t
                }) : "UA" === a.prefix && (xd() ? wd([a], m[w], q || "US", {
                    X: r
                }) : vd(a.containerId, m[w], {
                    X: r
                })))
            }
        }
    };
    var Bd = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Cd = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    },
    Dd = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    Ed = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Gd = function(a) {
        var b = bd("gtm.whitelist");
        b && Bc("GTM", 9);
        b = "google gtagfl lcl zone oid op".split(" ");
        var c = b && Da(ua(b), Cd),
        d = bd("gtm.blacklist");
        d || (d = bd("tagTypeBlacklist")) && Bc("GTM", 3);
        d ? Bc("GTM", 8) : d = [];
        Fd() && (d = ua(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        0 <= f(ua(d), "google") && Bc("GTM", 2);
        var e = d && Da(ua(d), Dd),
        g = {};
        return function(h) {
            var k = h && h[xb.ia];
            if (!k || "string" != typeof k) return ! 0;
            k = k.replace(/^_*/, "");
            if (void 0 !== g[k]) return g[k];
            var l = yc[k] || [],
            m = a(k, l);
            if (b) {
                var n;
                if (n = m) a: {
                    if (0 > f(c, k)) if (l && 0 < l.length) for (var p = 0; p < l.length; p++) {
                        if (0 > f(c, l[p])) {
                            Bc("GTM", 11);
                            n = !1;
                            break a
                        }
                    } else {
                        n = !1;
                        break a
                    }
                    n = !0
                }
                m = n
            }
            var t = !1;
            if (d) {
                var q = 0 <= f(e, k);
                if (q) t = q;
                else {
                    var r = qa(e, l || []);
                    r && Bc("GTM", 10);
                    t = r
                }
            }
            var u = !m || t;
            u || !(0 <= f(l, "sandboxedScripts")) || c && -1 !== f(c, "sandboxedScripts") || (u = qa(e, Ed));
            return g[k] = u
        }
    },
    Fd = function() {
        return Bd.test(C.location && C.location.hostname)
    };
    var Hd = {
        Hf: function(a, b) {
            b[xb.dd] && "string" === typeof a && (a = 1 == b[xb.dd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(xb.fd) && null === a && (a = b[xb.fd]);
            b.hasOwnProperty(xb.hd) && void 0 === a && (a = b[xb.hd]);
            b.hasOwnProperty(xb.gd) && !0 === a && (a = b[xb.gd]);
            b.hasOwnProperty(xb.ed) && !1 === a && (a = b[xb.ed]);
            return a
        }
    };
    var Id = {
        active: !0,
        isWhitelisted: function() {
            return ! 0
        }
    },
    Jd = function(a) {
        var b = oc.zones; ! b && a && (b = oc.zones = a());
        return b
    };
    var Kd = !1,
    Ld = 0,
    Md = [];
    function Nd(a) {
        if (!Kd) {
            var b = D.createEventObject,
            c = "complete" == D.readyState,
            d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Kd = !0;
                for (var e = 0; e < Md.length; e++) G(Md[e])
            }
            Md.push = function() {
                for (var g = 0; g < arguments.length; g++) G(arguments[g]);
                return 0
            }
        }
    }
    function Od() {
        if (!Kd && 140 > Ld) {
            Ld++;
            try {
                D.documentElement.doScroll("left"),
                Nd()
            } catch(a) {
                C.setTimeout(Od, 50)
            }
        }
    }
    var Pd = function(a) {
        Kd ? a() : Md.push(a)
    };
    var Qd = {},
    Rd = {},
    Sd = function(a, b, c, d) {
        if (!Rd[a] || qc[b] || "__zone" === b) return - 1;
        var e = {};
        Ha(d) && (e = v(d, e));
        e.id = c;
        e.status = "timeout";
        return Rd[a].tags.push(e) - 1
    },
    Td = function(a, b, c, d) {
        if (Rd[a]) {
            var e = Rd[a].tags[b];
            e && (e.status = c, e.executionTime = d)
        }
    };
    function Ud(a) {
        for (var b = Qd[a] || [], c = 0; c < b.length; c++) b[c]();
        Qd[a] = {
            push: function(d) {
                d(nc.m, Rd[a])
            }
        }
    }
    var Xd = function(a, b, c) {
        Rd[a] = {
            tags: []
        };
        ia(b) && Vd(a, b);
        c && C.setTimeout(function() {
            return Ud(a)
        },
        Number(c));
        return Wd(a)
    },
    Vd = function(a, b) {
        Qd[a] = Qd[a] || [];
        Qd[a].push(ya(function() {
            return G(function() {
                b(nc.m, Rd[a])
            })
        }))
    };
    function Wd(a) {
        var b = 0,
        c = 0,
        d = !1;
        return {
            add: function() {
                c++;
                return ya(function() {
                    b++;
                    d && b >= c && Ud(a)
                })
            },
            qf: function() {
                d = !0;
                b >= c && Ud(a)
            }
        }
    };
    var Yd = function() {
        function a(d) {
            return ! ka(d) || 0 > d ? 0 : d
        }
        if (!oc._li && C.performance && C.performance.timing) {
            var b = C.performance.timing.navigationStart,
            c = ka(cd.get("gtm.start")) ? cd.get("gtm.start") : 0;
            oc._li = {
                cst: a(c - b),
                cbt: a(uc - b)
            }
        }
    };
    var be = !1,
    ce = function() {
        return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject]
    },
    de = !1;
    var ee = function(a) {
        C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
        var b = C.GoogleAnalyticsObject;
        if (C[b]) C.hasOwnProperty(b) || Bc("GTM", 12);
        else {
            var c = function() {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(new Date);
            C[b] = c
        }
        Yd();
        return C[b]
    },
    fe = function(a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = ce();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var he = function() {},
    ge = function() {
        return C.GoogleAnalyticsObject || "ga"
    };
    var je = /^(?:(?:https?|mailto|ftp):|[^:/ ? #] * ( ? :[/?#]|$))/i;
    var ke = /:[0-9]+$/,
    le = function(a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var g = d[e].split("=");
            if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                var h = g.slice(1).join("=");
                return c ? h: decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    },
    oe = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = me(a.protocol) || me(C.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port: C.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(ke, "").toLowerCase());
        var g = b,
        h, k = me(a.protocol);
        g && (g = String(g).toLowerCase());
        switch (g) {
        case "url_no_fragment":
            h = ne(a);
            break;
        case "protocol":
            h = k;
            break;
        case "host":
            h = a.hostname.replace(ke, "").toLowerCase();
            if (c) {
                var l = /^www\d*\./.exec(h);
                l && l[0] && (h = h.substr(l[0].length))
            }
            break;
        case "port":
            h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || Bc("TAGGING", 1);
            h = "/" == a.pathname.substr(0, 1) ? a.pathname: "/" + a.pathname;
            var m = h.split("/");
            0 <= f(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
            h = m.join("/");
            break;
        case "query":
            h = a.search.replace("?", "");
            e && (h = le(h, e, void 0));
            break;
        case "extension":
            var n = a.pathname.split(".");
            h = 1 < n.length ? n[n.length - 1] : "";
            h = h.split("/")[0];
            break;
        case "fragment":
            h = a.hash.replace("#", "");
            break;
        default:
            h = a && a.href
        }
        return h
    },
    me = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    },
    ne = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href: a.href.substr(0, c)
        }
        return b
    },
    pe = function(a) {
        var b = D.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || Bc("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(ke, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    };
    var ve = function(a) {};
    function ue(a, b) {
        a.containerId = nc.m;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };
    function we(a, b, c, d) {
        var e = kb[a],
        g = xe(a, b, c, d);
        if (!g) return null;
        var h = tb(e[xb.Ad], c, []);
        if (h && h.length) {
            var k = h[0];
            g = we(k.index, {
                J: g,
                U: 1 === k.Ld ? b.terminate: g,
                terminate: b.terminate
            },
            c, d)
        }
        return g
    }
    function xe(a, b, c, d) {
        function e() {
            if (g[xb.We]) k();
            else {
                var w = ub(g, c, []),
                y = Sd(c.id, String(g[xb.ia]), Number(g[xb.Bd]), w[xb.Xe]),
                x = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!x) {
                        x = !0;
                        var B = wa() - A;
                        Vc(c.id, kb[a], "5");
                        Td(c.id, y, "success", B);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!x) {
                        x = !0;
                        var B = wa() - A;
                        Vc(c.id, kb[a], "6");
                        Td(c.id, y, "failure", B);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                Vc(c.id, g, "1");
                var z = function(B) {
                    var E = wa() - A;
                    ve(B);
                    Vc(c.id, g, "7");
                    Td(c.id, y, "exception", E);
                    x || (x = !0, k())
                };
                var A = wa();
                try {
                    sb(w, c)
                } catch(B) {
                    z(B)
                }
            }
        }
        var g = kb[a],
        h = b.J,
        k = b.U,
        l = b.terminate;
        if (c.Bc(g)) return null;
        var m = tb(g[xb.Cd], c, []);
        if (m && m.length) {
            var n = m[0],
            p = we(n.index, {
                J: h,
                U: k,
                terminate: l
            },
            c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Ld ? l: p
        }
        if (g[xb.zd] || g[xb.Ye]) {
            var t = g[xb.zd] ? lb: c.Rg,
            q = h,
            r = k;
            if (!t[a]) {
                e = ya(e);
                var u = ye(a, t, e);
                h = u.J;
                k = u.U
            }
            return function() {
                t[a](q, r)
            }
        }
        return e
    }
    function ye(a, b, c) {
        var d = [],
        e = [];
        b[a] = ze(d, e, c);
        return {
            J: function() {
                b[a] = Ae;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            U: function() {
                b[a] = Be;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }
    function ze(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function Ae(a) {
        a()
    }
    function Be(a, b) {
        b()
    };
    var Ee = function(a, b) {
        for (var c = [], d = 0; d < kb.length; d++) if (a.eb[d]) {
            var e = kb[d];
            var g = b.add();
            try {
                var h = we(d, {
                    J: g,
                    U: g,
                    terminate: g
                },
                a, d);
                h ? c.push({
                    qe: d,
                    ee: vb(e),
                    Sf: h
                }) : (Ce(d, a), g())
            } catch(l) {
                g()
            }
        }
        b.qf();
        c.sort(De);
        for (var k = 0; k < c.length; k++) c[k].Sf();
        return 0 < c.length
    };
    function De(a, b) {
        var c, d = b.ee,
        e = a.ee;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.qe,
            k = b.qe;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }
    function Ce(a, b) {
        if (!Sc) return;
        var c = function(d) {
            var e = b.Bc(kb[d]) ? "3": "4",
            g = tb(kb[d][xb.Ad], b, []);
            g && g.length && c(g[0].index);
            Vc(b.id, kb[d], e);
            var h = tb(kb[d][xb.Cd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Fe = !1,
    Ge = function(a, b, c, d, e) {
        if ("gtm.js" == b) {
            if (Fe) return ! 1;
            Fe = !0
        }
        Uc(a, b);
        var g = Xd(a, d, e);
        jd(a, "event", 1);
        jd(a, "ecommerce", 1);
        jd(a, "gtm");
        var h = {
            id: a,
            name: b,
            Bc: Gd(c),
            eb: [],
            Rg: [],
            Zd: function(n) {
                Bc("GTM", 6);
                ve(n)
            }
        };
        h.eb = Bb(h);
        var k = Ee(h, g);
        if (!k) return k;
        for (var l = 0; l < h.eb.length; l++) if (h.eb[l]) {
            var m = kb[l];
            if (m && !qc[String(m[xb.ia])]) return ! 0
        }
        return ! 1
    };
    var He = function(a, b) {
        var c = rb(a, b);
        kb.push(c);
        return kb.length - 1
    };
    var Ie = function(a, b, c, d, e) {
        var g = this;
        this.eventModel = a;
        this.containerConfig = c || {};
        this.targetConfig = b || {};
        this.containerConfig = c || {};
        this.gb = d || {};
        this.globalConfig = e || {};
        this.getWithConfig = function(h) {
            if (void 0 !== g.eventModel[h]) return g.eventModel[h];
            if (void 0 !== g.targetConfig[h]) return g.targetConfig[h];
            if (void 0 !== g.containerConfig[h]) return g.containerConfig[h];
            if (void 0 !== g.gb[h]) return g.gb[h];
            if (void 0 !== g.globalConfig[h]) return g.globalConfig[h]
        }
    };
    var Je = {},
    Ke = ["G"]; Je.se = "";
    var Le = Je.se.split(",");
    function Me() {
        var a = oc;
        return a.gcq = a.gcq || new Ne
    }
    var Oe = function(a, b, c) {
        Me().register(a, b, c)
    },
    Pe = function(a, b, c, d) {
        Me().push("event", [b, a], c, d)
    },
    Qe = function(a, b) {
        Me().push("config", [a], b)
    },
    Re = {},
    Se = function() {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.gb = {};
        this.fe = null;
        this.Vd = !1
    },
    Te = function(a, b, c, d, e) {
        this.type = a;
        this.Wg = b;
        this.O = c || "";
        this.Db = d;
        this.defer = e
    },
    Ne = function() {
        this.Hd = {};
        this.Qd = {};
        this.Ya = []
    },
    Ue = function(a, b) {
        var c = kc(b);
        return a.Hd[c.containerId] = a.Hd[c.containerId] || new Se
    },
    Ve = function(a, b, c, d) {
        if (d.O) {
            var e = Ue(a, d.O),
            g = e.fe;
            if (g) {
                var h = v(c),
                k = v(e.targetConfig[d.O]),
                l = v(e.containerConfig),
                m = v(e.gb),
                n = v(a.Qd),
                p = new Ie(h, k, l, m, n);
                try {
                    g(b, d.Wg, p)
                } catch(t) {}
            }
        }
    }; Ne.prototype.register = function(a, b, c) {
        if (3 !== Ue(this, a).status) {
            Ue(this, a).fe = b;
            Ue(this, a).status = 3;
            c && (Ue(this, a).gb = c);
            var d = kc(a),
            e = Re[d.containerId];
            if (void 0 !== e) {
                var g = oc[d.containerId].bootstrap,
                h = bd("gtm.uniqueEventId"),
                k = d.prefix,
                l = wa() - g;
                if (Sc && !Jc[h]) {
                    h !== Fc && (Oc(), Fc = h);
                    var m = k + "." + Math.floor(g - e) + "." + Math.floor(l);
                    Nc = Nc ? Nc + "," + m: "&cl=" + m
                }
                delete Re[d.containerId]
            }
            this.flush()
        }
    }; Ne.prototype.push = function(a, b, c, d) {
        var e = Math.floor(wa() / 1E3);
        if (c) {
            var g = kc(c),
            h;
            if (h = g) {
                var k;
                if (k = 1 === Ue(this, c).status) a: {
                    var l = g.prefix;
                    k = !0
                }
                h = k
            }
            if (h && (Ue(this, c).status = 2, this.push("require", [], g.containerId), Re[g.containerId] = wa(), !ld())) {
                var m = encodeURIComponent(g.containerId);
                Kb(("http:" != C.location.protocol ? "https:": "http:") + ("//www.googletagmanager.com/gtag/js?id=" + m + "&l=dataLayer&cx=c"))
            }
        }
        this.Ya.push(new Te(a, e, c, b, d));
        d || this.flush()
    }; Ne.prototype.flush = function(a) {
        for (var b = this; this.Ya.length;) {
            var c = this.Ya[0];
            if (c.defer) c.defer = !1,
            this.Ya.push(c);
            else switch (c.type) {
            case "require":
                if (3 !== Ue(this, c.O).status && !a) return;
                break;
            case "set":
                ra(c.Db[0],
                function(l, m) {
                    b.Qd[l] = m
                });
                break;
            case "config":
                var d = c.Db[0],
                e = !!d[H.tb];
                delete d[H.tb];
                var g = Ue(this, c.O),
                h = kc(c.O),
                k = h.containerId === h.id;
                e || (k ? g.containerConfig = {}: g.targetConfig[c.O] = {});
                g.Vd && e || Ve(this, H.L, d, c);
                g.Vd = !0;
                k ? v(d, g.containerConfig) : v(d, g.targetConfig[c.O]);
                break;
            case "event":
                Ve(this, c.Db[1], c.Db[0], c)
            }
            this.Ya.shift()
        }
    };
    var We = function(a, b, c) {
        for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
            var h = e[g].split("="),
            k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    },
    Ze = function(a, b, c, d) {
        var e = Xe(a, d);
        if (1 === e.length) return e[0].id;
        if (0 !== e.length) {
            e = Ye(e,
            function(g) {
                return g.Ib
            },
            b);
            if (1 === e.length) return e[0].id;
            e = Ye(e,
            function(g) {
                return g.fb
            },
            c);
            return e[0] ? e[0].id: void 0
        }
    };
    function $e(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= We(b, e).indexOf(c)
    }
    var cf = function(a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
            m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
            t = void 0,
            q;
            for (q in h) if (h.hasOwnProperty(q)) {
                var r = h[q];
                if (null != r) switch (q) {
                case "secure":
                    r && (m += "; secure");
                    break;
                case "domain":
                    p = r;
                    break;
                default:
                    "path" == q && (t = r),
                    "expires" == q && r instanceof Date && (r = r.toUTCString()),
                    m += "; " + q + "=" + r
                }
            }
            if ("auto" === p) {
                for (var u = af(), w = 0; w < u.length; ++w) {
                    var y = "none" != u[w] ? u[w] : void 0;
                    if (!bf(y, t) && $e(m + (y ? "; domain=" + y: ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !bf(p, t) && $e(m, a, l)
        }
        return k
    };
    function Ye(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
            l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d: e
    }
    function Xe(a, b) {
        for (var c = [], d = We(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
            h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    Ib: 1 * k[0] || 1,
                    fb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var df = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    ef = /(^|\.)doubleclick\.net$/i,
    bf = function(a, b) {
        return ef.test(document.location.hostname) || "/" === b && df.test(a)
    },
    af = function() {
        var a = [],
        b = document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = document.location.hostname;
        ef.test(e) || df.test(e) || a.push("none");
        return a
    };
    var gf = "".split(/,/), hf = null, jf = {},
    kf = {},
    lf, mf = function(a, b) {
        var c = {
            event: a
        };
        b && (c.eventModel = v(b), b[H.Zb] && (c.eventCallback = b[H.Zb]), b[H.Ma] && (c.eventTimeout = b[H.Ma]));
        return c
    };
    var nf = function() {
        hf = hf || !oc.gtagRegistered;
        oc.gtagRegistered = !0;
        return hf
    },
    of = function(a) {
        if (void 0 === kf[a.id]) {
            var b;
            switch (a.prefix) {
            case "UA":
                b = He("gtagua", {
                    trackingId: a.id
                });
                break;
            case "AW":
                b = He("gtagaw", {
                    conversionId: a
                });
                break;
            case "DC":
                b = He("gtagfl", {
                    targetId: a.id
                });
                break;
            case "GF":
                b = He("gtaggf", {
                    conversionId: a
                });
                break;
            case "G":
                b = He("get", {
                    trackingId: a.id,
                    isAutoTag: !0
                });
                break;
            case "HA":
                b = He("gtagha", {
                    conversionId: a
                });
                break;
            case "GP":
                b = He("gtaggp", {
                    conversionId: a
                });
                break;
            default:
                return
            }
            if (!lf) {
                var c = rb("v", {
                    name: "send_to",
                    dataLayerVersion: 2
                });
                gb.push(c);
                lf = ["macro", gb.length - 1]
            }
            var d = {
                arg0: lf,
                arg1: a.id,
                ignore_case: !1
            };
            d[xb.ia] = "_lc";
            jb.push(d);
            var e = {
                "if": [jb.length - 1],
                add: [b]
            };
            e["if"] && (e.add || e.block) && hb.push(e);
            kf[a.id] = b
        }
    },
    pf = function(a) {
        ra(jf,
        function(b, c) {
            var d = f(c, a);
            0 <= d && c.splice(d, 1)
        })
    },
    qf = ya(function() {}), rf = function(a) {
        if (a.containerId !== nc.m && "G" !== a.prefix) {
            var b;
            switch (a.prefix) {
            case "UA":
                b = 14;
                break;
            case "AW":
                b = 15;
                break;
            case "DC":
                b = 16;
                break;
            default:
                b = 17
            }
            Bc("GTM", b)
        }
    };
    var sf = {
        config: function(a) {
            var b = a[2] || {};
            if (2 > a.length || !ja(a[1]) || !Ha(b)) return;
            var c = kc(a[1]);
            if (!c) return;
            pf(c.id);
            var d = c.id,
            e = b[H.cc] || "default";
            e = e.toString().split(",");
            for (var g = 0; g < e.length; g++) jf[e[g]] = jf[e[g]] || [],
            jf[e[g]].push(d);
            delete b[H.cc];
            if (nf()) {
                if ( - 1 !== f(gf, c.prefix)) {
                    Qe(b, c.id);
                    return
                }
                of(c);
                rf(c)
            } else qf();
            id("gtag.targets." + c.id, void 0);
            id("gtag.targets." + c.id, v(b));
            var h = {};
            h[H.sa] = c.id;
            return mf(H.L, h);
        },
        event: function(a) {
            var b = a[1];
            if (ja(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Ha(a[2]) && void 0 != a[2]) return;
                    c = a[2]
                }
                var d = mf(b, c);
                var e;
                var g = c,
                h = bd("gtag.fields.send_to", 2);
                ja(h) || (h = H.sa);
                var k = g && g[h];
                void 0 === k && (k = bd(h, 2), void 0 === k && (k = "default"));
                if (ja(k) || la(k)) {
                    for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++) 0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(jf[l[n]] || []);
                    e = mc(m)
                } else e = void 0;
                var p = e;
                if (!p) return;
                var t = nf();
                t || qf();
                for (var q = [], r = 0; t && r < p.length; r++) {
                    var u = p[r];
                    rf(u);
                    q.push(u.id);
                    of(u)
                }
                d.eventModel = d.eventModel || {};
                0 < p.length ? d.eventModel[H.sa] = q.join() : delete d.eventModel[H.sa];
                return d
            }
        },
        js: function(a) {
            if (2 == a.length && a[1].getTime) return {
                event: "gtm.js",
                "gtm.start": a[1].getTime()
            }
        },
        policy: function(a) {
            3 === a.length && (void 0).kh(a[1], a[2])
        },
        set: function(a) {
            var b;
            2 == a.length && Ha(a[1]) ? b = v(a[1]) : 3 == a.length && ja(a[1]) && (b = {},
            Ha(a[2]) || la(a[2]) ? b[a[1]] = v(a[2]) : b[a[1]] = a[2]);
            if (b) {
                if (nf()) {
                    var c = v(b);
                    Me().push("set", [c])
                }
                b._clear = !0;
                return b
            }
        }
    },
    tf = {
        policy: !0
    };
    var vf = function(a) {
        return uf ? D.querySelectorAll(a) : null
    },
    wf = function(a, b) {
        if (!uf) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch(e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
        if (!D.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch(e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while ( null !== d && 1 === d . nodeType );
        return null
    },
    xf = !1;
    if (D.querySelectorAll) try {
        var yf = D.querySelectorAll(":root");
        yf && 1 == yf.length && yf[0] == D.documentElement && (xf = !0)
    } catch(a) {}
    var uf = xf;
    var Ff = function(a) {
        if (Ef(a)) return a;
        this.Zg = a
    }; Ff.prototype.Zf = function() {
        return this.Zg
    };
    var Ef = function(a) {
        return ! a || "object" !== Fa(a) || Ha(a) ? !1 : "getUntrustedUpdateValue" in a
    }; Ff.prototype.getUntrustedUpdateValue = Ff.prototype.Zf;
    var Gf = !1,
    Hf = [];
    function If() {
        if (!Gf) {
            Gf = !0;
            for (var a = 0; a < Hf.length; a++) G(Hf[a])
        }
    }
    var Jf = function(a) {
        Gf ? G(a) : Hf.push(a)
    };
    var Kf = [], Lf = !1, Mf = function(a) {
        return C["dataLayer"].push(a)
    },
    Nf = function(a) {
        var b = oc["dataLayer"],
        c = b ? b.subscribers: 1,
        d = 0;
        return function() {++d === c && a()
        }
    },
    Pf = function(a) {
        var b = a._clear;
        ra(a,
        function(g, h) {
            "_clear" !== g && (b && id(g, void 0), id(g, h))
        });
        tc || (tc = a["gtm.start"]);
        var c = a.event;
        if (!c) return ! 1;
        var d = a["gtm.uniqueEventId"];
        d || (d = zc(), a["gtm.uniqueEventId"] = d, id("gtm.uniqueEventId", d));
        vc = c;
        var e = Of(a);
        vc = null;
        switch (c) {
        case "gtm.init":
            Bc("GTM", 19),
            e && Bc("GTM", 20)
        }
        return e
    };
    function Of(a) {
        var b = a.event,
        c = a["gtm.uniqueEventId"],
        d,
        e = oc.zones;
        d = e ? e.checkState(nc.m, c) : Id;
        return d.active ? Ge(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var Qf = function() {
        for (var a = !1; ! Lf && 0 < Kf.length;) {
            Lf = !0;
            delete Yc.eventModel;
            ad();
            var b = Kf.shift();
            if (null != b) {
                var c = Ef(b);
                if (c) {
                    var d = b;
                    b = Ef(d) ? d.getUntrustedUpdateValue() : void 0;
                    for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                        var h = e[g],
                        k = bd(h, 1);
                        if (la(k) || Ha(k)) k = v(k);
                        Zc[h] = k
                    }
                }
                try {
                    if (ia(b)) try {
                        b.call(cd)
                    } catch(u) {} else if (la(b)) {
                        var l = b;
                        if (ja(l[0])) {
                            var m = l[0].split("."),
                            n = m.pop(),
                            p = l.slice(1),
                            t = bd(m.join("."), 2);
                            if (void 0 !== t && null !== t) try {
                                t[n].apply(t, p)
                            } catch(u) {}
                        }
                    } else {
                        var q = b;
                        if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) {
                            a: {
                                if (b.length && ja(b[0])) {
                                    var r = sf[b[0]];
                                    if (r && (!c || !tf[b[0]])) {
                                        b = r(b);
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            if (!b) {
                                Lf = !1;
                                continue
                            }
                        }
                        a = Pf(b) || a
                    }
                } finally {
                    c && ad(!0)
                }
            }
            Lf = !1
        }
        return ! a
    },
    Rf = function() {
        var a = Qf();
        try {
            var b = nc.m,
            c = C["dataLayer"].hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                e;
                for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break
                }
                d && (c.end(), c.end = null)
            }
        } catch(g) {}
        return a
    },
    Sf = function() {
        var a = Ib("dataLayer", []),
        b = Ib("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        Pd(function() {
            b.gtmDom || (b.gtmDom = !0, a.push({
                event: "gtm.dom"
            }))
        });
        Jf(function() {
            b.gtmLoad || (b.gtmLoad = !0, a.push({
                event: "gtm.load"
            }))
        });
        b.subscribers = (b.subscribers || 0) + 1;
        var c = a.push;
        a.push = function() {
            var d;
            if (0 < oc.SANDBOXED_JS_SEMAPHORE) {
                d = [];
                for (var e = 0; e < arguments.length; e++) d[e] = new Ff(arguments[e])
            } else d = [].slice.call(arguments, 0);
            var g = c.apply(a, d);
            Kf.push.apply(Kf, d);
            if (300 < this.length) for (Bc("GTM", 4); 300 < this.length;) this.shift();
            var h = "boolean" !== typeof g || g;
            return Qf() && h
        };
        Kf.push.apply(Kf, a.slice(0));
        G(Rf)
    };
    var Tf;
    var og = {}; og.wb = new String("undefined");
    var pg = function(a) {
        this.resolve = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === og.wb ? b: a[d]);
            return c.join("")
        }
    }; pg.prototype.toString = function() {
        return this.resolve("undefined")
    }; pg.prototype.valueOf = pg.prototype.toString; og.$e = pg; og.kc = {}; og.Kf = function(a) {
        return new pg(a)
    };
    var qg = {}; og.Jg = function(a, b) {
        var c = zc();
        qg[c] = [a, b];
        return c
    }; og.Id = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = qg[c];
            if (d && "function" === typeof d[b]) d[b]();
            qg[c] = void 0
        }
    }; og.lg = function(a) {
        for (var b = !1,
        c = !1,
        d = 2; d < a.length; d++) b = b || 8 === a[d],
        c = c || 16 === a[d];
        return b && c
    }; og.xg = function(a) {
        if (a === og.wb) return a;
        var b = zc();
        og.kc[b] = a;
        return 'google_tag_manager["' + nc.m + '"].macro(' + b + ")"
    }; og.pg = function(a, b, c) {
        a instanceof og.$e && (a = a.resolve(og.Jg(b, c)), b = ha);
        return {
            zc: a,
            J: b
        }
    };
    var rg = function(a, b, c) {
        function d(g, h) {
            var k = g[h];
            return k
        }
        var e = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": d(a, "className"),
            "gtm.elementId": a["for"] || Qb(a, "id") || "",
            "gtm.elementTarget": a.formTarget || d(a, "target") || ""
        };
        c && (e["gtm.triggers"] = c.join(","));
        e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction: "") || a.action || d(a, "href") || a.src || a.code || a.codebase || "";
        return e
    },
    sg = function(a) {
        oc.hasOwnProperty("autoEventsSettings") || (oc.autoEventsSettings = {});
        var b = oc.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    },
    tg = function(a, b, c) {
        sg(a)[b] = c
    },
    ug = function(a, b, c, d) {
        var e = sg(a),
        g = xa(e, b, d);
        e[b] = c(g)
    },
    vg = function(a, b, c) {
        var d = sg(a);
        return xa(d, b, c)
    };
    var wg = function() {
        for (var a = Gb.userAgent + (D.cookie || "") + (D.referrer || ""), b = a.length, c = C.history.length; 0 < c;) a += c--^b++;
        var d = 1,
        e, g, h;
        if (a) for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g),
        d = (d << 6 & 268435455) + h + (h << 14),
        e = d & 266338304,
        d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(wa() / 1E3)].join(".")
    },
    zg = function(a, b, c, d) {
        var e = xg(b);
        return Ze(a, e, yg(c), d)
    },
    Ag = function(a, b, c, d) {
        var e = "" + xg(c),
        g = yg(d);
        1 < g && (e += "-" + g);
        return [b, e, a].join(".")
    },
    xg = function(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    },
    yg = function(a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    var Bg = ["1"], Cg = {},
    Gg = function(a, b, c, d) {
        var e = Dg(a);
        Cg[e] || Eg(e, b, c) || (Fg(e, wg(), b, c, d), Eg(e, b, c))
    };
    function Fg(a, b, c, d, e) {
        var g = Ag(b, "1", d, c);
        cf(a, g, c, d, 0 == e ? void 0 : new Date(wa() + 1E3 * (void 0 == e ? 7776E3: e)))
    }
    function Eg(a, b, c) {
        var d = zg(a, b, c, Bg);
        d && (Cg[a] = d);
        return d
    }
    function Dg(a) {
        return (a || "_gcl") + "_au"
    };
    var Hg = function() {
        for (var a = [], b = D.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Xc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Xc] || (g[a[h].Xc] = []), g[a[h].Xc].push({
                timestamp: k[1],
                Wf: k[2]
            }))
        }
        return g
    };
    function Ig() {
        for (var a = Jg,
        b = {},
        c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }
    function Kg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Jg, Lg, Mg = function(a) {
        Jg = Jg || Kg();
        Lg = Lg || Ig();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
            e = c + 2 < a.length,
            g = a.charCodeAt(c),
            h = d ? a.charCodeAt(c + 1) : 0,
            k = e ? a.charCodeAt(c + 2) : 0,
            l = g >> 2,
            m = (g & 3) << 4 | h >> 4,
            n = (h & 15) << 2 | k >> 6,
            p = k & 63;
            e || (p = 64, d || (n = 64));
            b.push(Jg[l], Jg[m], Jg[n], Jg[p])
        }
        return b.join("")
    },
    Ng = function(a) {
        function b(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                n = Lg[m];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Jg = Jg || Kg();
        Lg = Lg || Ig();
        for (var c = "",
        d = 0;;) {
            var e = b( - 1),
            g = b(0),
            h = b(64),
            k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | g >> 4);
            64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var Og;
    function Pg(a, b) {
        if (!a || b === D.location.hostname) return ! 1;
        for (var c = 0; c < a.length; c++) if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return ! 0
        } else if (0 <= b.indexOf(a[c])) return ! 0;
        return ! 1
    }
    var Tg = function() {
        var a = Qg,
        b = Rg,
        c = Sg(),
        d = function(h) {
            a(h.target || h.srcElement || {})
        },
        e = function(h) {
            b(h.target || h.srcElement || {})
        };
        if (!c.init) {
            Ob(D, "mousedown", d);
            Ob(D, "keyup", d);
            Ob(D, "submit", e);
            var g = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                g.call(this)
            };
            c.init = !0
        }
    },
    Sg = function() {
        var a = Ib("google_tag_data", {}),
        b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    };
    var Ug = /(.*?)\*(.*?)\*(.*)/,
    Vg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Wg = /^(?:www\.|m\.|amp\.)+/,
    Xg = /([^?#]+)(\?[^#]*)?(#.*)?/,
    Yg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
    $g = function(a) {
        var b = [],
        c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Mg(String(d))))
        }
        var e = b.join("*");
        return ["1", Zg(e), e].join("*")
    },
    Zg = function(a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
        d;
        if (! (d = Og)) {
            for (var e = Array(256), g = 0; 256 > g; g++) {
                for (var h = g,
                k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[g] = h
            }
            d = e
        }
        Og = d;
        for (var l = 4294967295,
        m = 0; m < c.length; m++) l = l >>> 8 ^ Og[(l ^ c.charCodeAt(m)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    },
    bh = function() {
        return function(a) {
            var b = pe(C.location.href),
            c = b.search.replace("?", ""),
            d = le(c, "_gl", !0) || "";
            a.query = ah(d) || {};
            var e = oe(b, "fragment").match(Yg);
            a.fragment = ah(e && e[3] || "") || {}
        }
    },
    ch = function() {
        var a = bh(),
        b = Sg();
        b.data || (b.data = {
            query: {},
            fragment: {}
        },
        a(b.data));
        var c = {},
        d = b.data;
        d && (za(c, d.query), za(c, d.fragment));
        return c
    },
    ah = function(a) {
        var b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                var c;
                a: {
                    for (var d = a,
                    e = 0; 3 > e; ++e) {
                        var g = Ug.exec(d);
                        if (g) {
                            c = g;
                            break a
                        }
                        d = decodeURIComponent(d)
                    }
                    c = void 0
                }
                var h = c;
                if (h && "1" === h[1]) {
                    var k = h[3],
                    l;
                    a: {
                        for (var m = h[2], n = 0; n < b; ++n) if (m === Zg(k, n)) {
                            l = !0;
                            break a
                        }
                        l = !1
                    }
                    if (l) {
                        for (var p = {},
                        t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = Ng(t[q + 1]);
                        return p
                    }
                }
            }
        } catch(r) {}
    };
    function dh(a, b, c) {
        function d(m) {
            var n = m,
            p = Yg.exec(n),
            t = n;
            if (p) {
                var q = p[2],
                r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var u = m.charAt(m.length - 1);
            m && "&" !== u && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Xg.exec(b);
        if (!e) return "";
        var g = e[1],
        h = e[2] || "",
        k = e[3] || "",
        l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }
    function eh(a, b, c) {
        for (var d = {},
        e = {},
        g = Sg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h]; (!c || k.forms) && Pg(k.domains, b) && (k.fragment ? za(e, k.callback()) : za(d, k.callback()))
        }
        if (Ca(d)) {
            var l = $g(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = D.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value", l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var u = dh(l, a.action);
                        je.test(u) && (a.action = u)
                    }
                }
            } else fh(l, a, !1)
        }
        if (!c && Ca(e)) {
            var w = $g(e);
            fh(w, a, !0)
        }
    }
    function fh(a, b, c) {
        if (b.href) {
            var d = dh(a, b.href, void 0 === c ? !1 : c);
            je.test(d) && (b.href = d)
        }
    }
    var Qg = function(a) {
        try {
            var b;
            a: {
                for (var c = a,
                d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var g = e.protocol;
                "http:" !== g && "https:" !== g || eh(e, e.hostname, !1)
            }
        } catch(h) {}
    },
    Rg = function(a) {
        try {
            if (a.action) {
                var b = oe(pe(a.action), "host");
                eh(a, b, !0)
            }
        } catch(c) {}
    },
    gh = function(a, b, c, d) {
        Tg();
        var e = {
            callback: a,
            domains: b,
            fragment: "fragment" === c,
            forms: !!d
        };
        Sg().decorators.push(e)
    },
    hh = function() {
        var a = D.location.hostname,
        b = Vg.exec(D.referrer);
        if (!b) return ! 1;
        var c = b[2],
        d = b[1],
        e = "";
        if (c) {
            var g = c.split("/"),
            h = g[1];
            e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return ! 1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Wg, ""),
        l = e.replace(Wg, ""),
        m;
        if (! (m = k === l)) {
            var n = "." + l;
            m = k.substring(k.length - n.length, k.length) === n
        }
        return m
    },
    ih = function(a, b) {
        return ! 1 === a ? !1 : a || b || hh()
    };
    var jh = {};
    var kh = /^\w+$/,
    lh = /^[\w-]+$/,
    mh = /^~?[\w-]+$/,
    nh = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha"
    };
    function oh(a) {
        return a && "string" == typeof a && a.match(kh) ? a: "_gcl"
    }
    var qh = function() {
        var a = pe(C.location.href),
        b = oe(a, "query", !1, void 0, "gclid"),
        c = oe(a, "query", !1, void 0, "gclsrc"),
        d = oe(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || le(e, "gclid", void 0);
            c = c || le(e, "gclsrc", void 0)
        }
        return ph(b, c, d)
    };
    function ph(a, b, c) {
        var d = {},
        e = function(g, h) {
            d[h] || (d[h] = []);
            d[h].push(g)
        };
        if (void 0 !== a && a.match(lh)) switch (b) {
        case void 0:
            e(a, "aw");
            break;
        case "aw.ds":
            e(a, "aw");
            e(a, "dc");
            break;
        case "ds":
            e(a, "dc");
            break;
        case "3p.ds":
            (void 0 == jh.gtm_3pds ? 0 : jh.gtm_3pds) && e(a, "dc");
            break;
        case "gf":
            e(a, "gf");
            break;
        case "ha":
            e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }
    var sh = function(a) {
        var b = qh();
        rh(b, a)
    };
    function rh(a, b, c) {
        function d(p, t) {
            var q = th(p, e);
            q && cf(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = oh(b.prefix),
        g = b.domain || "auto",
        h = b.path || "/",
        k = void 0 == b.Ic ? 7776E3: b.Ic;
        c = c || wa();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
        m = Math.round(c / 1E3),
        n = function(p) {
            return ["GCL", m, p].join(".")
        };
        a.aw && (!0 === b.Gh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var vh = function(a, b, c, d, e) {
        for (var g = ch(), h = oh(b), k = 0; k < a.length; ++k) {
            var l = a[k];
            if (void 0 !== nh[l]) {
                var m = th(l, h),
                n = g[m];
                if (n) {
                    var p = Math.min(uh(n), wa()),
                    t;
                    b: {
                        for (var q = p,
                        r = We(m, D.cookie), u = 0; u < r.length; ++u) if (uh(r[u]) > q) {
                            t = !0;
                            break b
                        }
                        t = !1
                    }
                    t || cf(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3: e)), !0)
                }
            }
        }
        var w = {
            prefix: b,
            path: c,
            domain: d
        };
        rh(ph(g.gclid, g.gclsrc), w)
    },
    th = function(a, b) {
        var c = nh[a];
        if (void 0 !== c) return b + c
    },
    uh = function(a) {
        var b = a.split(".");
        return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    };
    function wh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var xh = function(a, b, c, d, e) {
        if (la(b)) {
            var g = oh(e);
            gh(function() {
                for (var h = {},
                k = 0; k < a.length; ++k) {
                    var l = th(a[k], g);
                    if (l) {
                        var m = We(l, D.cookie);
                        m.length && (h[l] = m.sort()[m.length - 1])
                    }
                }
                return h
            },
            b, c, d)
        }
    },
    yh = function(a) {
        return a.filter(function(b) {
            return mh.test(b)
        })
    },
    zh = function(a) {
        for (var b = ["aw", "dc"], c = oh(a && a.prefix), d = {},
        e = 0; e < b.length; e++) nh[b[e]] && (d[b[e]] = nh[b[e]]);
        ra(d,
        function(g, h) {
            var k = We(c + h, D.cookie);
            if (k.length) {
                var l = k[0],
                m = uh(l),
                n = {};
                n[g] = [wh(l)];
                rh(n, a, m)
            }
        })
    };
    var Ah = /^\d+\.fls\.doubleclick\.net$/;
    function Bh(a) {
        var b = pe(C.location.href),
        c = oe(b, "host", !1);
        if (c && c.match(Ah)) {
            var d = oe(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }
    function Ch(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = Bh("gcl" + a);
            if (c) return c.split(".")
        }
        var d = oh(b);
        if ("_gcl" == d) {
            var e;
            e = qh()[a] || [];
            if (0 < e.length) return e
        }
        var g = th(a, d),
        h;
        if (g) {
            var k = [];
            if (D.cookie) {
                var l = We(g, D.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = wh(l[m]);
                        n && -1 === f(k, n) && k.push(n)
                    }
                    h = yh(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var Dh = function() {
        var a = Bh("gac");
        if (a) return decodeURIComponent(a);
        var b = Hg(),
        c = [];
        ra(b,
        function(d, e) {
            for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Wf);
            g = yh(g);
            g.length && c.push(d + ":" + g.join(","))
        });
        return c.join(";")
    },
    Eh = function(a, b, c, d, e) {
        Gg(b, c, d, e);
        var g = Cg[Dg(b)],
        h = qh().dc || [],
        k = !1;
        if (g && 0 < h.length) {
            var l = oc.joined_au = oc.joined_au || {},
            m = b || "_gcl";
            if (!l[m]) for (var n = 0; n < h.length; n++) {
                var p = "https://adservice.google.com/ddm/regclk",
                t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                Gb.sendBeacon && Gb.sendBeacon(t) || Nb(t);
                k = l[m] = !0
            }
        }
        null == a && (a = k);
        if (a && g) {
            var q = Dg(b),
            r = Cg[q];
            r && Fg(q, r, c, d, e)
        }
    };
    var Fh;
    if (3 === nc.Ab.length) Fh = "g";
    else {
        var Gh = "G";
        Gh = "g";
        Fh = Gh
    }
    var Hh = {
        "": "n",
        UA: "u",
        AW: "a",
        DC: "d",
        G: "e",
        GF: "f",
        HA: "h",
        GTM: Fh,
        OPT: "o"
    },
    Ih = function(a) {
        var b = nc.m.split("-"),
        c = b[0].toUpperCase(),
        d = Hh[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        g;
        if (3 === nc.Ab.length) {
            var h = void 0;
            h = h || (ld() ? "s": "o");
            g = "2" + (h || "w")
        } else g = "";
        return g + d + nc.Ab + e
    };
    var Jh = function(a) {
        return ! (void 0 === a || null === a || 0 === (a + "").length)
    },
    Kh = function(a, b) {
        var c;
        if (2 === b.N) return a("ord", na(1E11, 1E13)),
        !0;
        if (3 === b.N) return a("ord", "1"),
        a("num", na(1E11, 1E13)),
        !0;
        if (4 === b.N) return Jh(b.sessionId) && a("ord", b.sessionId),
        !0;
        if (5 === b.N) c = "1";
        else if (6 === b.N) c = b.Rc;
        else return ! 1;
        Jh(c) && a("qty", c);
        Jh(b.Fb) && a("cost", b.Fb);
        Jh(b.transactionId) && a("ord", b.transactionId);
        return ! 0
    },
    Lh = encodeURIComponent, Mh = function(a, b) {
        function c(n, p, t) {
            g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" + (t ? p: Lh(p)))
        }
        var d = a.wc,
        e = a.protocol;
        e += a.Qb ? "//" + d + ".fls.doubleclick.net/activityi": "//ad.doubleclick.net/activity";
        e += ";src=" + Lh(d) + (";type=" + Lh(a.yc)) + (";cat=" + Lh(a.Xa));
        var g = a.Mf || {};
        ra(g,
        function(n, p) {
            e += ";" + Lh(n) + "=" + Lh(p + "")
        });
        if (Kh(c, a)) {
            Jh(a.Wb) && c("u", a.Wb);
            Jh(a.Vb) && c("tran", a.Vb);
            c("gtm", Ih()); ! 1 === a.kf && c("npa", "1");
            if (a.uc) {
                var h = Ch("dc", a.ya);
                h && h.length && c("gcldc", h.join("."));
                var k = Ch("aw", a.ya);
                k && k.length && c("gclaw", k.join("."));
                var l = Dh();
                l && c("gac", l);
                Gg(a.ya, void 0, a.If, a.Jf);
                var m = Cg[Dg(a.ya)];
                m && c("auiddc", m)
            }
            Jh(a.Nc) && c("prd", a.Nc, !0);
            ra(a.Zc,
            function(n, p) {
                c(n, p)
            });
            e += b || "";
            Jh(a.Ob) && c("~oref", a.Ob);
            a.Qb ? Mb(e + "?", a.J) : Nb(e + "?", a.J, a.U)
        } else G(a.U)
    };
    var Nh = ["input", "select", "textarea"], Ph = ["button", "hidden", "image", "reset", "submit"], Qh = function(a) {
        var b = a.tagName.toLowerCase();
        return ! ma(Nh,
        function(c) {
            return c === b
        }) || "input" === b && ma(Ph,
        function(c) {
            return c === a.type.toLowerCase()
        }) ? !1 : !0
    },
    Rh = function(a) {
        return a.form ? a.form.tagName ? a.form: D.getElementById(a.form) : Tb(a, ["form"], 100)
    },
    Sh = function(a, b, c) {
        if (!a.elements) return 0;
        for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
            var h = a.elements[e];
            if (Qh(h)) {
                if (h.getAttribute(c) === d) return g;
                g++
            }
        }
        return 0
    };
    var Uh = function(a) {
        var b;
        if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
        else if (a.hasOwnProperty("price")) b = "price";
        else return;
        var c = b,
        d = "/pagead/conversion/" + Th(a.conversion_id) + "/?",
        e = Th(JSON.stringify(a[c])),
        g = "https://www.googletraveladservices.com/travel/flights/clk" + d + c + "=" + e;
        if (a.conversionLinkerEnabled) {
            var h = Ch("gf", a.cookiePrefix);
            if (h && h.length) for (var k = 0; k < h.length; k++) g += "&gclgf=" + Th(h[k])
        }
        Nb(g, a.onSuccess, a.onFailure)
    },
    Th = function(a) {
        return null === a || void 0 === a || 0 === String(a).length ? "": encodeURIComponent(String(a))
    };
    var Vh = !!C.MutationObserver,
    Wh = void 0,
    Xh = function(a) {
        if (!Wh) {
            var b = function() {
                var c = D.body;
                if (c) if (Vh)(new MutationObserver(function() {
                    for (var e = 0; e < Wh.length; e++) G(Wh[e])
                })).observe(c, {
                    childList: !0,
                    subtree: !0
                });
                else {
                    var d = !1;
                    Ob(c, "DOMNodeInserted",
                    function() {
                        d || (d = !0, G(function() {
                            d = !1;
                            for (var e = 0; e < Wh.length; e++) G(Wh[e])
                        }))
                    })
                }
            };
            Wh = [];
            D.body ? b() : G(b)
        }
        Wh.push(a)
    };
    var yi = C.clearTimeout,
    zi = C.setTimeout,
    M = function(a, b, c) {
        if (ld()) {
            b && G(b)
        } else return Kb(a, b, c)
    },
    Ai = function() {
        return C.location.href
    },
    Bi = function(a) {
        return oe(pe(a), "fragment")
    },
    Ci = function(a) {
        return ne(pe(a))
    },
    Di = null;
    var Ei = function(a, b) {
        return bd(a, b || 2)
    },
    Fi = function(a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return Mf(a)
    },
    Gi = function(a, b) {
        C[a] = b
    },
    W = function(a, b, c) {
        b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
        return C[a]
    },
    Hi = function(a, b, c) {
        return We(a, b, void 0 === c ? !0 : !!c)
    },
    Ii = function(a, b, c, d) {
        var e = {
            prefix: a,
            path: b,
            domain: c,
            Ic: d
        };
        sh(e);
        zh(e)
    },
    Ji = function(a, b, c, d, e) {
        vh(a, b, c, d, e);
    },
    Ki = function(a, b, c, d, e) {
        xh(a, b, c, d, e);
    },
    Li = function(a, b) {
        if (ld()) {
            b && G(b)
        } else Mb(a, b)
    },
    Mi = function(a) {
        return !! vg(a, "init", !1)
    },
    Ni = function(a) {
        tg(a, "init", !0)
    },
    Oi = function(a, b, c) {
        var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js": sc;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        b && ra(b,
        function(e, g) {
            g && (d += "&" + e + "=" + encodeURIComponent(g))
        });
        M(L("https://", "http://", d))
    },
    Pi = function(a, b) {
        var c = a[b];
        return c
    };
    var Qi = function(a, b, c, d, e, g) {
        var h = {
            config: a,
            gtm: Ih()
        };
        c && (Gg(d, void 0, e, g), h.auiddc = Cg[Dg(d)]);
        b && (h.loadInsecure = b);
        W("__dc_ns_processor", []).push(h);
        M((b ? "http": "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    };
    var Ri = og.pg;
    var Si = new oa,
    Ti = function(a, b) {
        function c(h) {
            var k = pe(h),
            l = oe(k, "protocol"),
            m = oe(k, "host", !0),
            n = oe(k, "port"),
            p = oe(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web",
            n = "default";
            return [l, m, n, p]
        }
        for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++) if (d[g] !== e[g]) return ! 1;
        return ! 0
    },
    Ui = function(a) {
        var b = a.arg0,
        c = a.arg1;
        if (a.any_of && la(c)) {
            for (var d = 0; d < c.length; d++) if (Ui({
                "function": a["function"],
                arg0: b,
                arg1: c[d]
            })) return ! 0;
            return ! 1
        }
        switch (a["function"]) {
        case "_cn":
            return 0 <= String(b).indexOf(String(c));
        case "_css":
            var e;
            a:
            {
                if (b) {
                    var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                    try {
                        for (var h = 0; h < g.length; h++) if (b[g[h]]) {
                            e = b[g[h]](c);
                            break a
                        }
                    } catch(u) {}
                }
                e = !1
            }
            return e;
        case "_ew":
            var k, l;
            k = String(b);
            l = String(c);
            var m = k.length - l.length;
            return 0 <= m && k.indexOf(l, m) == m;
        case "_eq":
            return String(b) == String(c);
        case "_ge":
            return Number(b) >= Number(c);
        case "_gt":
            return Number(b) > Number(c);
        case "_lc":
            var n;
            n = String(b).split(",");
            return 0 <= f(n, String(c));
        case "_le":
            return Number(b) <= Number(c);
        case "_lt":
            return Number(b) < Number(c);
        case "_re":
            var p;
            var t = a.ignore_case ? "i": void 0;
            try {
                var q = String(c) + t,
                r = Si.get(q);
                r || (r = new RegExp(c, t), Si.set(q, r));
                p = r.test(b)
            } catch(u) {
                p = !1
            }
            return p;
        case "_sw":
            return 0 == String(b).indexOf(String(c));
        case "_um":
            return Ti(b, c)
        }
        return ! 1
    };
    var Wi = {},
    Xi = function() {
        if (C._gtmexpgrp && C._gtmexpgrp.hasOwnProperty(1)) return C._gtmexpgrp[1];
        void 0 === Wi[1] && (Wi[1] = Math.floor(2 * Math.random()));
        return Wi[1]
    };
    var Yi = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Zi = {},
    $i = encodeURI,
    X = encodeURIComponent,
    aj = Nb;
    var bj = function(a, b) {
        if (!a) return ! 1;
        var c = oe(pe(a), "host");
        if (!c) return ! 1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return ! 0
            }
        }
        return ! 1
    };
    var cj = function(a, b, c) {
        for (var d = {},
        e = !1,
        g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d: null
    }; Zi.mg = function() {
        var a = !1;
        return a
    };
    var Mj = function() {
        var a = C.gaGlobal = C.gaGlobal || {};
        a.hid = a.hid || na();
        return a.hid
    };
    var vk = window,
    wk = document,
    xk = function(a) {
        var b = vk._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === vk["ga-disable-" + a]) return ! 0;
        try {
            var c = vk.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return ! 0
        } catch(g) {}
        for (var d = We("AMP_TOKEN", wk.cookie, !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return ! 0;
        return wk.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var Ak = function(a) {
        return "_" === a.charAt(0)
    },
    Bk = function(a) {
        ra(a,
        function(c) {
            Ak(c) && delete a[c]
        });
        var b = a[H.ub] || {};
        ra(b,
        function(c) {
            Ak(c) && delete b[c]
        })
    };
    var Ek = function(a, b, c) {
        Pe(b, c, a)
    },
    Fk = function(a, b, c) {
        Pe(b, c, a, !0)
    },
    Hk = function(a, b) {},
    Gk = function(a, b) {};

    var Ik = !1,
    Jk = [], Kk = ["aw", "dc"], Lk = function(a) {
        var b = C.google_trackConversion,
        c = a.gtm_onFailure;
        "function" == typeof b ? b(a) || c() : c()
    },
    Mk = function() {
        for (; 0 < Jk.length;) Lk(Jk.shift())
    },
    Nk = function(a) {
        if (!Ik) {
            Ik = !0;
            Yd();
            var b = function() {
                Mk();
                Jk = {
                    push: Lk
                }
            };
            ld() ? b() : Kb(a, b,
            function() {
                Mk();
                Ik = !1
            })
        }
    },
    Ok = function(a) {
        if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        }
    },
    Pk = function(a, b, c, d) {
        var e = kc(a),
        g = b == H.L,
        h = e.h[0],
        k = e.h[1],
        l = void 0 !== k,
        m = function(J) {
            return d.getWithConfig(J)
        },
        n = !1 !== m(H.Ja),
        p = m(H.Ia) || m(H.T),
        t = m(H.R),
        q = m(H.S),
        r = L("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"),
        u = void 0; - 1 != navigator.userAgent.toLowerCase().indexOf("firefox") && (u = Xi(), r = 1 == u ? "https://www.google.com/pagead/conversion_async.js?cjs=1": "https://www.googleadservices.com/pagead/conversion_async.js?cjs=0");
        if (g) {
            var w = m(H.fa) || {};
            if (n) {
                ih(w[H.Na], !!w[H.B]) && vh(Kk, p, void 0, t, q);
                var y = {
                    prefix: p,
                    domain: t,
                    Ic: q
                };
                sh(y);
                zh(y)
            }
            w[H.B] && xh(Kk, w[H.B], w[H.Pa], !!w[H.Oa], p);
            yd(e)
        }
        var x = !1 === m(H.jd) || !1 === m(H.Sa);
        if (!g || !l && !x) if (!0 === m(H.kd) && (l = !1), !1 !== m(H.P) || l) {
            var z = {
                google_conversion_id: h,
                google_remarketing_only: !l,
                onload_callback: m("gtmOnSuccess"),
                gtm_onFailure: m("gtmOnFailure"),
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_conversion_label: k,
                google_conversion_language: m(H.ra),
                google_conversion_value: m(H.Z),
                google_conversion_currency: m(H.da),
                google_conversion_order_id: m(H.Ta),
                google_user_id: m(H.Ua),
                google_conversion_page_url: m(H.Qa),
                google_conversion_referrer_url: m(H.Ra),
                google_gtm: Ih()
            };
            ld() && (z.opt_image_generator = function() {
                return new Image
            },
            z.google_enable_display_cookie_match = !1); ! 1 === m(H.P) && (z.google_allow_ad_personalization_signals = !1);
            z.google_read_gcl_cookie_opt_out = !n;
            n && p && (z.google_gcl_cookie_prefix = p);
            var A = function() {
                var J = m(H.La),
                N = {
                    event: b
                };
                if (la(J)) {
                    for (var V = 0; V < J.length; ++V) {
                        var S = J[V],
                        Q = m(S);
                        void 0 !== Q && (N[S] = Q)
                    }
                    return N
                }
                var O = m("eventModel");
                if (!O) return null;
                v(O, N);
                for (var K = 0; K < H.cd.length; ++K) delete N[H.cd[K]];
                return N
            } ();
            A && (z.google_custom_params = A); ! l && m(H.Y) && (z.google_gtag_event_data = {
                items: m(H.Y),
                value: m(H.Z)
            });
            if (l && "purchase" == b) {
                z.google_conversion_merchant_id = m(H.od);
                z.google_basket_feed_country = m(H.md);
                z.google_basket_feed_language = m(H.nd);
                z.google_basket_discount = m(H.ld);
                z.google_basket_transaction_type = b;
                z.google_disable_merchant_reported_conversions = !0 === m(H.qd);
                ld() && (z.google_disable_merchant_reported_conversions = !0);
                var B = Ok(m(H.Y));
                B && (z.google_conversion_items = B)
            }
            var E = function(J, N) {
                void 0 != N && "" !== N && (z.google_additional_conversion_params = z.google_additional_conversion_params || {},
                z.google_additional_conversion_params[J] = N)
            };
            l && ("boolean" === typeof m(H.fc) && E("vdnc", m(H.fc)), E("vdltv", m(H.pd)));
            void 0 !== u && E("cjs", String(u));
            var F = !0;
            F && Jk.push(z)
        }
        Nk(r)
    };
    var Z = {
        a: {}
    };

    Z.a.gtagha = ["google"],
    function() {
        function a(h) {
            function k(m, n) {
                void 0 !== n && l.push(m + "=" + n)
            }
            if (void 0 === h) return "";
            var l = [];
            k("hct_base_price", h.Rd);
            k("hct_booking_xref", h.Sd);
            k("hct_checkin_date", h.bg);
            k("hct_checkout_date", h.cg);
            k("hct_currency_code", h.dg);
            k("hct_partner_hotel_id", h.Td);
            k("hct_total_price", h.Ud);
            return l.join(";")
        }
        function b(h, k, l, m) {
            var n = X(h),
            p = X(a(k)),
            t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
            l && (t += Ch("ha", m).map(function(q) {
                return "&gclha=" + X(q)
            }).join(""));
            return t
        }
        function c(h, k, l, m, n, p) { / ^\d + $ / .test(h) ? aj(b(h, k, l, m), n, p) : G(p)
        }
        function d(h, k, l, m) {
            var n = {};
            ja(h) ? n.Sd = h: "number" === typeof h && (n.Sd = String(h));
            ja(l) && (n.dg = l);
            ja(k) ? n.Ud = n.Rd = k: "number" === typeof k && (n.Ud = n.Rd = String(k));
            if (!la(m) || 0 == m.length) return n;
            var p = m[0];
            if (!Ha(p)) return n;
            ja(p.id) ? n.Td = p.id: "number" === typeof p.id && (n.Td = String(p.id));
            ja(p.start_date) && (n.bg = p.start_date);
            ja(p.end_date) && (n.cg = p.end_date);
            return n
        }
        function e(h) {
            var k = vc,
            l = h.vtp_gtmOnSuccess,
            m = h.vtp_gtmOnFailure,
            n = h.vtp_conversionId,
            p = n.containerId,
            t = function(z) {
                return dd(z, p, n.id)
            },
            q = !1 !== t(H.Ja),
            r = t(H.Ia) || t(H.T),
            u = t(H.R),
            w = t(H.S);
            if (k === H.L) {
                var y = t(H.fa) || {};
                q && (ih(y[H.Na], !!y[H.B]) && Ji(g, r, void 0, u, w), Ii(r, void 0, u, w));
                y[H.B] && Ki(g, y[H.B], y[H.Pa], !!y[H.Oa], r);
                G(l)
            } else if ("purchase" === k) {
                var x = d(t(H.Ta), t(H.Z), t(H.da), t(H.Y));
                c(n.h[0], x, q, r, l, m)
            } else G(m)
        }
        var g = ["ha"];
        Z.__gtagha = e;
        Z.__gtagha.b = "gtagha";
        Z.__gtagha.g = !0;
        Z.__gtagha.priorityOverride = 0;
    } (); Z.a.e = ["google"],
    function() { (function(a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0;
            Z.__e.priorityOverride = 0
        })(function(a) {
            return String(kd(a.vtp_gtmEventId, "event"))
        })
    } ();

    Z.a.v = ["google"],
    function() { (function(a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0;
            Z.__v.priorityOverride = 0
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return ! 1;
            var c = Ei(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c: a.vtp_defaultValue
        })
    } ();

    Z.a.gtagaw = ["google"],
    function() { (function(a) {
            Z.__gtagaw = a;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0
        })(function(a) {
            var b = a.vtp_conversionId,
            c = void 0 !== b.h[1] ? b.id: void 0;
            Pk(a.vtp_conversionId.id, vc, (new Date).getTime(), {
                getWithConfig: function(d) {
                    return "gtmOnSuccess" === d ? a.vtp_gtmOnSuccess: "gtmOnFailure" === d ? a.vtp_gtmOnFailure: dd(d, b.containerId, c)
                }
            })
        })
    } ();

    Z.a.get = ["google"],
    function() {
        var a = !1;
        var b = function(c) {
            if (c.vtp_isAutoTag) {
                var d = String(c.vtp_trackingId),
                e = vc || "";
                if (!a && Ak(e)) return;
                var g = {};
                if (e === H.L) {
                    var h = Ei("gtag.targets." + d);
                    v(h, g);
                    a ? g[H.vb] = !0 : Bk(g);
                    Qe(g, d)
                } else {
                    if (a) {
                        var k = Ei("eventModel");
                        v(k, g);
                        g[H.vb] = !0
                    } else {
                        var l = gd(H.La, d);
                        if (la(l)) for (var m = 0; m < l.length; m++) {
                            var n = l[m],
                            p = gd(n, d);
                            void 0 !== p && (g[n] = p)
                        } else {
                            var t = Ei("eventModel");
                            v(t, g)
                        }
                        Bk(g)
                    }
                    Pe(e, g, d)
                }
            } else {
                var q = c.vtp_settings,
                r = q.eventParameters,
                u = q.userProperties;
                v(cj(c.vtp_eventParameters, "name", "value"), r);
                v(cj(c.vtp_userProperties, "name", "value"), u);
                r[H.ub] = u;
                var w = String(c.vtp_eventName),
                y = c.vtp_allowSystemNames;
                if (!y && Ak(w)) return;
                y || Bk(r); (c.vtp_deferrable ? Fk: Ek)(String(q.streamId), w, r)
            }
            c.vtp_gtmOnSuccess()
        };
        Z.__get = b;
        Z.__get.b = "get";
        Z.__get.g = !0;
        Z.__get.priorityOverride = 0;
    } ();

    Z.a.gtagfl = [],
    function() {
        function a(e) {
            var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
            if (g) {
                var h = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                } [(g[5] || "").toLowerCase()];
                if (h) return {
                    containerId: "DC-" + g[1],
                    O: g[3] ? e: "",
                    cf: g[1],
                    bf: g[3] || "",
                    Xa: g[4] || "",
                    N: h
                }
            }
        }
        function b(e, g) {
            function h(t, q, r) {
                void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
            }
            var k = [],
            l = g(H.Y) || [];
            if (la(l)) for (var m = 0; m < l.length; m++) {
                var n = l[m],
                p = m + 1;
                h("i", p, n.id);
                h("p", p, n.price);
                h("q", p, n.quantity);
                h("c", p, g(H.ze));
                h("l", p, g(H.ra))
            }
            return k.join("|")
        }
        function c(e, g, h) {
            var k = /^u([1-9]\d?|100)$/,
            l = e(H.Ae) || {},
            m = hd(g, h),
            n = {},
            p = {};
            if (Ha(l)) for (var t in l) if (l.hasOwnProperty(t) && k.test(t)) {
                var q = l[t];
                ja(q) && (n[t] = q)
            }
            for (var r = 0; r < m.length; r++) {
                var u = m[r];
                k.test(u) && (n[u] = u)
            }
            for (var w in n) n.hasOwnProperty(w) && (p[w] = e(n[w]));
            return p
        }
        var d = ["aw", "dc"]; (function(e) {
            Z.__gtagfl = e;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0;
            Z.__gtagfl.priorityOverride = 0
        })(function(e) {
            var g = e.vtp_gtmOnSuccess,
            h = e.vtp_gtmOnFailure,
            k = a(e.vtp_targetId);
            if (k) {
                var l = function(V) {
                    return dd(V, k.containerId, k.O || void 0)
                },
                m = !1 !== l(H.Ja),
                n = l(H.Ia) || l(H.T),
                p = l(H.R),
                t = l(H.S),
                q = l(H.Ce),
                r = 3 === md();
                if (vc === H.L) {
                    var u = l(H.fa) || {},
                    w = l(H.Ka),
                    y = void 0 === w ? !0 : !!w;
                    m && (ih(u[H.Na], !!u[H.B]) && Ji(d, n, void 0, p, t), Ii(n, void 0, p, t), Eh(y, n, void 0, p, t));
                    u[H.B] && Ki(d, u[H.B], u[H.Pa], !!u[H.Oa], n);
                    q && q.exclusion_parameters && q.engines && Qi(q, r, m, n, p, t);
                    G(g)
                } else {
                    var x = {},
                    z = l(H.Be);
                    if (Ha(z)) for (var A in z) if (z.hasOwnProperty(A)) {
                        var B = z[A];
                        void 0 !== B && null !== B && (x[A] = B)
                    }
                    var E = "";
                    if (5 === k.N || 6 === k.N) E = b(X, l);
                    var F = c(l, k.containerId, k.O),
                    J = !0 === l(H.ve);
                    if (ld() && J) {
                        J = !1
                    }
                    var N = {
                        Xa: k.Xa,
                        uc: m,
                        If: p,
                        Jf: t,
                        ya: n,
                        Fb: l(H.Z),
                        N: k.N,
                        Mf: x,
                        wc: k.cf,
                        yc: k.bf,
                        U: h,
                        J: g,
                        Ob: Ci(Ai()),
                        Nc: E,
                        protocol: r ? "http:": "https:",
                        Rc: l(H.Oe),
                        Qb: J,
                        sessionId: l(H.sb),
                        Vb: void 0,
                        transactionId: l(H.Ta),
                        Wb: void 0,
                        Zc: F,
                        kf: !1 !== l(H.P)
                    };
                    Mh(N)
                }
            } else G(h)
        })
    } ();

    Z.a.gtaggf = ["google"],
    function() {
        var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
        b = function(c) {
            if (c) {
                for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                    var h = c[g]; ! h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (d[e] = {
                        cabin: h.travel_class,
                        fare_product: h.fare_product,
                        booking_code: h.booking_code,
                        flight_number: h.flight_number,
                        origin: h.origin,
                        destination: h.destination,
                        departure_date: h.start_date
                    },
                    e++)
                }
                return d
            }
        }; (function(c) {
            Z.__gtaggf = c;
            Z.__gtaggf.b = "gtaggf";
            Z.__gtaggf.g = !0;
            Z.__gtaggf.priorityOverride = 0
        })(function(c) {
            var d = vc,
            e = c.vtp_gtmOnSuccess,
            g = c.vtp_gtmOnFailure,
            h = c.vtp_conversionId,
            k = h.h[0],
            l = h.containerId,
            m = function(z) {
                return dd(z, l, h.id)
            },
            n = !1 !== m(H.Ja),
            p = m(H.Ia) || m(H.T),
            t = m(H.R),
            q = m(H.S);
            if (d === H.L) n && Ii(p, void 0, t, q),
            G(e);
            else {
                var r = {
                    conversion_id: k,
                    onFailure: g,
                    onSuccess: e,
                    conversionLinkerEnabled: n,
                    cookiePrefix: p
                },
                u = a.test(Ai());
                if ("purchase" === d) {
                    var y = {
                        partner_id: k,
                        trip_type: m(H.Se),
                        total_price: m(H.Z),
                        currency: m(H.da),
                        is_direct_booking: u,
                        flight_segment: b(m(H.Y))
                    },
                    x = m(H.Le);
                    x && "object" === typeof x && (y.passengers_total = x.total, y.passengers_adult = x.adult, y.passengers_child = x.child, y.passengers_infant_in_seat = x.infant_in_seat, y.passengers_infant_in_lap = x.infant_in_lap);
                    r.conversion_data = y;
                    Uh(r)
                } else G(g)
            }
        })
    } ();

    Z.a.gtagua = ["google"],
    function() {
        var a, b = {},
        c = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac"
        },
        d = {
            anonymize_ip: 1,
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignTerm",
                content: "campaignContent",
                id: "campaignId"
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1
        },
        e = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1
        },
        g = {
            cookie_name: 1,
            cookie_expires: "duration",
            levels: 1
        },
        h = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1
        },
        k = function(u, w, y, x) {
            if (void 0 !== y) if (h[w] && (y = ta(y)), "anonymize_ip" != w || y || (y = void 0), 1 === u) x[l(w)] = y;
            else if (ja(u)) x[u] = y;
            else for (var z in u) u.hasOwnProperty(z) && void 0 !== y[z] && (x[u[z]] = y[z])
        },
        l = function(u) {
            return u && ja(u) ? u.replace(/(_[a-z])/g,
            function(w) {
                return w[1].toUpperCase()
            }) : u
        },
        m = function(u, w, y) {
            u.hasOwnProperty(w) || (u[w] = y)
        },
        n = function(u, w, y) {
            var x = {},
            z = {},
            A = {},
            B;
            var E = gd(H.Ie, u);
            if (la(E)) {
                for (var F = [], J = 0; J < E.length; J++) {
                    var N = E[J];
                    if (void 0 != N) {
                        var V = N.id,
                        S = N.variant;
                        void 0 != V && void 0 != S && F.push(String(V) + "." + String(S))
                    }
                }
                B = 0 < F.length ? F.join("!") : void 0
            } else B = void 0;
            var Q = B;
            Q && m(z, "exp", Q);
            var O = gd("custom_map", u);
            if (Ha(O)) for (var K in O) if (O.hasOwnProperty(K) && /^(dimension|metric)\d+$/.test(K) && void 0 != O[K]) {
                var I = gd(String(O[K]), u);
                void 0 !== I && m(z, K, I)
            }
            for (var R = hd(u), U = 0; U < R.length; ++U) {
                var Y = R[U],
                da = gd(Y, u);
                e.hasOwnProperty(Y) ? k(e[Y], Y, da, x) : d.hasOwnProperty(Y) ? k(d[Y], Y, da, z) : c.hasOwnProperty(Y) ? k(c[Y], Y, da, A) : /^(dimension|metric|content_group)\d+$/.test(Y) ? k(1, Y, da, z) : Y === H.T && 0 > f(R, H.pb) && (A.cookieName = da + "_ga")
            }
            var ea = String(vc);
            m(A, "cookieDomain", "auto");
            m(z, "forceSSL", !0);
            var Ba = "general";
            0 <= f("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ea) ? Ba = "ecommerce": 0 <= f("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ea) ? Ba = "engagement": "exception" == ea && (Ba = "error");
            m(x, "eventCategory", Ba);
            0 <= f(["view_item", "view_item_list", "view_promotion", "view_search_results"], ea) && m(z, "nonInteraction", !0);
            "login" == ea || "sign_up" == ea || "share" == ea ? m(x, "eventLabel", gd(H.Je, u)) : "search" == ea || "view_search_results" == ea ? m(x, "eventLabel", gd(H.Qe, u)) : "select_content" == ea && m(x, "eventLabel", gd(H.ye, u));
            var T = x[H.fa] || {},
            P = T[H.Na];
            P || 0 != P && T[H.B] ? A.allowLinker = !0 : !1 === P && m(A, "useAmpClientId", !1);
            if (!1 === gd(H.we, u) || !1 === gd(H.P, u)) z.allowAdFeatures = !1;
            A.name = w;
            z["&gtm"] = Ih(!0);
            z.hitCallback = y;
            var pa = gd("_x_19", u) || Ei("gtag.remote_config." + u + ".url"),
            Ta = gd("_x_20", u) || Ei("gtag.remote_config." + u + ".dualId");
            pa && (A._x_19 = pa);
            Ta && (A._x_20 = Ta);
            x.ba = z;
            x.za = A;
            return x
        },
        p = function(u) {
            function w(I) {
                var R = v(I);
                R.list = I.list_name;
                R.listPosition = I.list_position;
                R.position = I.list_position || I.creative_slot;
                R.creative = I.creative_name;
                return R
            }
            function y(I) {
                for (var R = [], U = 0; I && U < I.length; U++) I[U] && R.push(w(I[U]));
                return R.length ? R: void 0
            }
            function x(I) {
                return {
                    id: A(z.Ta),
                    affiliation: A(z.De),
                    revenue: A(z.Z),
                    tax: A(z.He),
                    shipping: A(z.Ge),
                    coupon: A(z.Ee),
                    list: A(z.Yb) || I
                }
            }
            for (var z = H,
            A = function(I) {
                return dd(I, u, void 0)
            },
            B = A(z.Y), E, F = 0; B && F < B.length && !(E = B[F][z.Yb]); F++);
            var J = A("custom_map");
            if (Ha(J)) for (var N = 0; B && N < B.length; ++N) {
                var V = B[N],
                S;
                for (S in J) J.hasOwnProperty(S) && /^(dimension|metric)\d+$/.test(S) && void 0 != J[S] && m(V, S, V[J[S]])
            }
            var Q = null,
            O = vc,
            K = A(z.Fe);
            "purchase" == O || "refund" == O ? Q = {
                action: O,
                Wa: x(),
                Ea: y(B)
            }: "add_to_cart" == O ? Q = {
                action: "add",
                Ea: y(B)
            }: "remove_from_cart" == O ? Q = {
                action: "remove",
                Ea: y(B)
            }: "view_item" == O ? Q = {
                action: "detail",
                Wa: x(E),
                Ea: y(B)
            }: "view_item_list" == O ? Q = {
                action: "impressions",
                gg: y(B)
            }: "view_promotion" == O ? Q = {
                action: "promo_view",
                Oc: y(K)
            }: "select_content" == O && K && 0 < K.length ? Q = {
                action: "promo_click",
                Oc: y(K)
            }: "select_content" == O ? Q = {
                action: "click",
                Wa: {
                    list: A(z.Yb) || E
                },
                Ea: y(B)
            }: "begin_checkout" == O || "checkout_progress" == O ? Q = {
                action: "checkout",
                Ea: y(B),
                Wa: {
                    step: "begin_checkout" == O ? 1 : A(z.sd),
                    option: A(z.rd)
                }
            }: "set_checkout_option" == O && (Q = {
                action: "checkout_option",
                Wa: {
                    step: A(z.sd),
                    option: A(z.rd)
                }
            });
            Q && (Q.nh = A(z.da));
            return Q
        },
        t = {},
        q = function(u, w) {
            var y = t[u];
            t[u] = v(w);
            if (!y) return ! 1;
            for (var x in w) if (w.hasOwnProperty(x) && w[x] !== y[x]) return ! 0;
            for (var z in y) if (y.hasOwnProperty(z) && y[z] !== w[z]) return ! 0;
            return ! 1
        },
        r = function(u) {
            var w = u.vtp_trackingId,
            y = "https://www.google-analytics.com/analytics.js",
            x = ee();
            if (ia(x)) {
                var z = "gtag_" + w.split("-").join("_"),
                A = function(Q) {
                    var O = [].slice.call(arguments, 0);
                    O[0] = z + "." + O[0];
                    x.apply(window, O)
                },
                B = function() {
                    var Q = function(R, U) {
                        for (var Y = 0; U && Y < U.length; Y++) A(R, U[Y])
                    },
                    O = p(w);
                    if (O) {
                        var K = O.action;
                        if ("impressions" == K) Q("ec:addImpression", O.gg);
                        else if ("promo_click" == K || "promo_view" == K) {
                            var I = O.Oc;
                            Q("ec:addPromo", O.Oc);
                            I && 0 < I.length && "promo_click" == K && A("ec:setAction", K)
                        } else Q("ec:addProduct", O.Ea),
                        A("ec:setAction", K, O.Wa)
                    }
                },
                E = function() {
                    if (ld()) {} else {
                        var Q = gd(H.Ke, w);
                        Q && (A("require", Q, {
                            dataLayer: "dataLayer"
                        }), A("require", "render"))
                    }
                },
                F = n(w, z, u.vtp_gtmOnSuccess);
                q(z, F.za) && (x(function() {
                    ce() && ce().remove(z)
                }), b[z] = !1);
                x("create", w, F.za); (function() {
                    var Q = gd("custom_map", w);
                    x(function() {
                        if (Ha(Q)) {
                            var O = F.ba,
                            K = ce().getByName(z),
                            I;
                            for (I in Q) if (Q.hasOwnProperty(I) && /^(dimension|metric)\d+$/.test(I) && void 0 != Q[I]) {
                                var R = K.get(l(Q[I]));
                                m(O, I, R)
                            }
                        }
                    })
                })(); (function(Q) {
                    if (Q) {
                        var O = {};
                        if (Ha(Q)) for (var K in g) g.hasOwnProperty(K) && k(g[K], K, Q[K], O);
                        A("require", "linkid", O)
                    }
                })(F.linkAttribution);
                var J = F[H.fa];
                if (J && J[H.B]) {
                    var N = J[H.Pa];
                    fe(z + ".", J[H.B], void 0 === N ? !!J.use_anchor: "fragment" === N, !!J[H.Oa])
                }
                var V = function(Q, O, K) {
                    K && (O = "" + O);
                    F.ba[Q] = O
                },
                S = vc;
                S == H.Xb ? (E(), A("send", "pageview", F.ba)) : S == H.L ? (E(), yd(w), 0 != F.sendPageView && A("send", "pageview", F.ba)) : "screen_view" == S ? A("send", "screenview", F.ba) : "timing_complete" == S ? (V("timingCategory", F.eventCategory, !0), V("timingVar", F.name, !0), V("timingValue", sa(F.value)), void 0 !== F.eventLabel && V("timingLabel", F.eventLabel, !0), A("send", "timing", F.ba)) : "exception" == S ? A("send", "exception", F.ba) : "optimize.callback" != S && (0 <= f("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), S) && (A("require", "ec", "ec.js"), B()), V("eventCategory", F.eventCategory, !0), V("eventAction", F.eventAction || S, !0), void 0 !== F.eventLabel && V("eventLabel", F.eventLabel, !0), void 0 !== F.value && V("eventValue", sa(F.value)), A("send", "event", F.ba));
                a || (a = !0, Yd(), M(y,
                function() {
                    ce().loaded || u.vtp_gtmOnFailure()
                },
                u.vtp_gtmOnFailure))
            } else G(u.vtp_gtmOnFailure)
        };
        Z.__gtagua = r;
        Z.__gtagua.b = "gtagua";
        Z.__gtagua.g = !0;
        Z.__gtagua.priorityOverride = 0
    } ();

    var Qk = {}; Qk.macro = function(a) {
        if (og.kc.hasOwnProperty(a)) return og.kc[a]
    },
    Qk.onHtmlSuccess = og.Id(!0), Qk.onHtmlFailure = og.Id(!1); Qk.dataLayer = cd; Qk.callback = function(a) {
        xc.hasOwnProperty(a) && ia(xc[a]) && xc[a]();
        delete xc[a]
    }; Qk.vf = function() {
        oc[nc.m] = Qk;
        za(yc, Z.a);
        ob = ob || og;
        qb = Hd
    }; Qk.hg = function() {
        jh.gtm_3pds = !0;
        oc = C.google_tag_manager = C.google_tag_manager || {};
        if (oc[nc.m]) {
            var a = oc.zones;
            a && a.unregisterChild(nc.m)
        } else {
            for (var b = data.resource || {},
            c = b.macros || [], d = 0; d < c.length; d++) gb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) kb.push(e[g]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) jb.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {},
                t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[t], 1);
                hb.push(p)
            }
            mb = Z;
            nb = Ui;
            Qk.vf();
            Sf();
            Kd = !1;
            Ld = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) Nd();
            else {
                Ob(D, "DOMContentLoaded", Nd);
                Ob(D, "readystatechange", Nd);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !C.frameElement
                    } catch(y) {}
                    q && Od()
                }
                Ob(C, "load", Nd)
            }
            Gf = !1;
            "complete" === D.readyState ? If() : Ob(C, "load", If);
            a: {
                if (!Sc) break a;
                C.setInterval(Tc, 864E5);
            }
            uc = (new Date).getTime();
            Qk.bootstrap = uc;
        }
    }; (0, Qk.hg)();

})()