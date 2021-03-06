//a is window,b is moment.(http://momentjs.cn)
;!function (a, b) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = b() : 'function' == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function () {
    'use strict';

    function a () {
        return Wd.apply(null, arguments);
    }

    function b (a) {
        Wd = a;
    }

    function c (a) {
        return a instanceof Array || '[object Array]' === Object.prototype.toString.call(a);
    }

    function d (a) {
        return a instanceof Date || '[object Date]' === Object.prototype.toString.call(a);
    }

    function e (a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c)
            d.push(b(a[c], c));
        return d;
    }

    function f (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function g (a, b) {
        for (var c in b)
            f(b, c) && (a[c] = b[c]);
        return f(b, 'toString') && (a.toString = b.toString),
        f(b, 'valueOf') && (a.valueOf = b.valueOf),
            a;
    }

    function h (a, b, c, d) {
        return Ia(a, b, c, d, !0).utc();
    }

    function i () {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        };
    }

    function j (a) {
        return null == a._pf && (a._pf = i()),
            a._pf;
    }

    function k (a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated),
            a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
        }
        return a._isValid;
    }

    function l (a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0,
            b;
    }

    function m (a) {
        return void 0 === a;
    }

    function n (a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
            m(b._i) || (a._i = b._i),
            m(b._f) || (a._f = b._f),
            m(b._l) || (a._l = b._l),
            m(b._strict) || (a._strict = b._strict),
            m(b._tzm) || (a._tzm = b._tzm),
            m(b._isUTC) || (a._isUTC = b._isUTC),
            m(b._offset) || (a._offset = b._offset),
            m(b._pf) || (a._pf = j(b)),
            m(b._locale) || (a._locale = b._locale),
            Xd.length > 0)
            for (c in Xd)
                d = Xd[c],
                    e = b[d],
                m(e) || (a[d] = e);
        return a;
    }

    function o (b) {
        n(this, b),
            this._d = new Date(null != b._d ? b._d.getTime() : NaN),
        Yd === !1 && (Yd = !0,
            a.updateOffset(this),
            Yd = !1);
    }

    function p (a) {
        return a instanceof o || null != a && null != a._isAMomentObject;
    }

    function q (a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a);
    }

    function r (a) {
        var b = +a
            , c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)),
            c;
    }

    function s (a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; e > d; d++)
            (c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f;
    }

    function t (b) {
        a.suppressDeprecationWarnings === !1 && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + b);
    }

    function u (a, b) {
        var c = !0;
        return g(function () {
            return c && (t(a + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error).stack),
                c = !1),
                b.apply(this, arguments);
        }, b);
    }

    function v (a, b) {
        Zd[a] || (t(b),
            Zd[a] = !0);
    }

    function w (a) {
        return a instanceof Function || '[object Function]' === Object.prototype.toString.call(a);
    }

    function x (a) {
        return '[object Object]' === Object.prototype.toString.call(a);
    }

    function y (a) {
        var b, c;
        for (c in a)
            b = a[c],
                w(b) ? this[c] = b : this['_' + c] = b;
        this._config = a,
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
    }

    function z (a, b) {
        var c, d = g({}, a);
        for (c in b)
            f(b, c) && (x(a[c]) && x(b[c]) ? (d[c] = {},
                g(d[c], a[c]),
                g(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
        return d;
    }

    function A (a) {
        null != a && this.set(a);
    }

    function B (a) {
        return a ? a.toLowerCase().replace('_', '-') : a;
    }

    function C (a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = B(a[f]).split('-'),
                     b = e.length,
                     c = B(a[f + 1]),
                     c = c ? c.split('-') : null; b > 0;) {
                if (d = D(e.slice(0, b).join('-')))
                    return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1)
                    break;
                b--;
            }
            f++;
        }
        return null;
    }

    function D (a) {
        var b = null;
        if (!_d[a] && 'undefined' != typeof module && module && module.exports)
            try {
                b = $d._abbr,
                    require('./locale/' + a),
                    E(b);
            } catch (c) {
            }
        return _d[a];
    }

    function E (a, b) {
        var c;
        return a && (c = m(b) ? H(a) : F(a, b),
        c && ($d = c)),
            $d._abbr;
    }

    function F (a, b) {
        return null !== b ? (b.abbr = a,
            null != _d[a] ? (v('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale'),
                b = z(_d[a]._config, b)) : null != b.parentLocale && (null != _d[b.parentLocale] ? b = z(_d[b.parentLocale]._config, b) : v('parentLocaleUndefined', 'specified parentLocale is not defined yet')),
            _d[a] = new A(b),
            E(a),
            _d[a]) : (delete _d[a],
            null);
    }

    function G (a, b) {
        if (null != b) {
            var c;
            null != _d[a] && (b = z(_d[a]._config, b)),
                c = new A(b),
                c.parentLocale = _d[a],
                _d[a] = c,
                E(a);
        } else
            null != _d[a] && (null != _d[a].parentLocale ? _d[a] = _d[a].parentLocale : null != _d[a] && delete _d[a]);
        return _d[a];
    }

    function H (a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr),
                !a)
            return $d;
        if (!c(a)) {
            if (b = D(a))
                return b;
            a = [a];
        }
        return C(a);
    }

    function I () {
        return Object.keys(_d);
    }

    function J (a, b) {
        var c = a.toLowerCase();
        ae[c] = ae[c + 's'] = ae[b] = a;
    }

    function K (a) {
        return 'string' == typeof a ? ae[a] || ae[a.toLowerCase()] : void 0;
    }

    function L (a) {
        var b, c, d = {};
        for (c in a)
            f(a, c) && (b = K(c),
            b && (d[b] = a[c]));
        return d;
    }

    function M (b, c) {
        return function (d) {
            return null != d ? (O(this, b, d),
                a.updateOffset(this, c),
                this) : N(this, b);
        };
    }

    function N (a, b) {
        return a.isValid() ? a._d['get' + (a._isUTC ? 'UTC' : '') + b]() : NaN;
    }

    function O (a, b, c) {
        a.isValid() && a._d['set' + (a._isUTC ? 'UTC' : '') + b](c);
    }

    function P (a, b) {
        var c;
        if ('object' == typeof a)
            for (c in a)
                this.set(c, a[c]);
        else if (a = K(a),
                w(this[a]))
            return this[a](b);
        return this;
    }

    function Q (a, b, c) {
        var d = '' + Math.abs(a)
            , e = b - d.length
            , f = a >= 0;
        return (f ? c ? '+' : '' : '-') + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
    }

    function R (a, b, c, d) {
        var e = d;
        'string' == typeof d && (e = function () {
                return this[d]();
            }
        ),
        a && (ee[a] = e),
        b && (ee[b[0]] = function () {
                return Q(e.apply(this, arguments), b[1], b[2]);
            }
        ),
        c && (ee[c] = function () {
                return this.localeData().ordinal(e.apply(this, arguments), a);
            }
        );
    }

    function S (a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, '') : a.replace(/\\/g, '');
    }

    function T (a) {
        var b, c, d = a.match(be);
        for (b = 0,
                 c = d.length; c > b; b++)
            ee[d[b]] ? d[b] = ee[d[b]] : d[b] = S(d[b]);
        return function (e) {
            var f = '';
            for (b = 0; c > b; b++)
                f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f;
        };
    }

    function U (a, b) {
        return a.isValid() ? (b = V(b, a.localeData()),
            de[b] = de[b] || T(b),
            de[b](a)) : a.localeData().invalidDate();
    }

    function V (a, b) {
        function c (a) {
            return b.longDateFormat(a) || a;
        }

        var d = 5;
        for (ce.lastIndex = 0; d >= 0 && ce.test(a);)
            a = a.replace(ce, c),
                ce.lastIndex = 0,
                d -= 1;
        return a;
    }

    function W (a, b, c) {
        we[a] = w(b) ? b : function (a, d) {
            return a && c ? c : b;
        };
    }

    function X (a, b) {
        return f(we, a) ? we[a](b._strict, b._locale) : new RegExp(Y(a));
    }

    function Y (a) {
        return Z(a.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e;
        }));
    }

    function Z (a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    function $ (a, b) {
        var c, d = b;
        for ('string' == typeof a && (a = [a]),
             'number' == typeof b && (d = function (a, c) {
                     c[b] = r(a);
                 }
             ),
                 c = 0; c < a.length; c++)
            xe[a[c]] = d;
    }

    function _ (a, b) {
        $(a, function (a, c, d, e) {
            d._w = d._w || {},
                b(a, d._w, d, e);
        });
    }

    function aa (a, b, c) {
        null != b && f(xe, a) && xe[a](b, c._a, c, a);
    }

    function ba (a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }

    function ca (a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[He.test(b) ? 'format' : 'standalone'][a.month()];
    }

    function da (a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[He.test(b) ? 'format' : 'standalone'][a.month()];
    }

    function ea (a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = []),
                 d = 0; 12 > d; d++) {
            if (e = h([2e3, d]),
                c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp('^' + this.months(e, '').replace('.', '') + '$', 'i'),
                    this._shortMonthsParse[d] = new RegExp('^' + this.monthsShort(e, '').replace('.', '') + '$', 'i')),
                c || this._monthsParse[d] || (f = '^' + this.months(e, '') + '|^' + this.monthsShort(e, ''),
                    this._monthsParse[d] = new RegExp(f.replace('.', ''), 'i')),
                c && 'MMMM' === b && this._longMonthsParse[d].test(a))
                return d;
            if (c && 'MMM' === b && this._shortMonthsParse[d].test(a))
                return d;
            if (!c && this._monthsParse[d].test(a))
                return d;
        }
    }

    function fa (a, b) {
        var c;
        if (!a.isValid())
            return a;
        if ('string' == typeof b)
            if (/^\d+$/.test(b))
                b = r(b);
            else if (b = a.localeData().monthsParse(b),
                'number' != typeof b)
                return a;
        return c = Math.min(a.date(), ba(a.year(), b)),
            a._d['set' + (a._isUTC ? 'UTC' : '') + 'Month'](b, c),
            a;
    }

    function ga (b) {
        return null != b ? (fa(this, b),
            a.updateOffset(this, !0),
            this) : N(this, 'Month');
    }

    function ha () {
        return ba(this.year(), this.month());
    }

    function ia (a) {
        return this._monthsParseExact ? (f(this, '_monthsRegex') || ka.call(this),
            a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }

    function ja (a) {
        return this._monthsParseExact ? (f(this, '_monthsRegex') || ka.call(this),
            a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex;
    }

    function ka () {
        function a (a, b) {
            return b.length - a.length;
        }

        var b, c, d = [], e = [], f = [];
        for (b = 0; 12 > b; b++)
            c = h([2e3, b]),
                d.push(this.monthsShort(c, '')),
                e.push(this.months(c, '')),
                f.push(this.months(c, '')),
                f.push(this.monthsShort(c, ''));
        for (d.sort(a),
                 e.sort(a),
                 f.sort(a),
                 b = 0; 12 > b; b++)
            d[b] = Z(d[b]),
                e[b] = Z(e[b]),
                f[b] = Z(f[b]);
        this._monthsRegex = new RegExp('^(' + f.join('|') + ')', 'i'),
            this._monthsShortRegex = this._monthsRegex,
            this._monthsStrictRegex = new RegExp('^(' + e.join('|') + ')$', 'i'),
            this._monthsShortStrictRegex = new RegExp('^(' + d.join('|') + ')$', 'i');
    }

    function la (a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[ze] < 0 || c[ze] > 11 ? ze : c[Ae] < 1 || c[Ae] > ba(c[ye], c[ze]) ? Ae : c[Be] < 0 || c[Be] > 24 || 24 === c[Be] && (0 !== c[Ce] || 0 !== c[De] || 0 !== c[Ee]) ? Be : c[Ce] < 0 || c[Ce] > 59 ? Ce : c[De] < 0 || c[De] > 59 ? De : c[Ee] < 0 || c[Ee] > 999 ? Ee : -1,
        j(a)._overflowDayOfYear && (ye > b || b > Ae) && (b = Ae),
        j(a)._overflowWeeks && -1 === b && (b = Fe),
        j(a)._overflowWeekday && -1 === b && (b = Ge),
            j(a).overflow = b),
            a;
    }

    function ma (a) {
        var b, c, d, e, f, g, h = a._i, i = Me.exec(h) || Ne.exec(h);
        if (i) {
            for (j(a).iso = !0,
                     b = 0,
                     c = Pe.length; c > b; b++)
                if (Pe[b][1].exec(i[1])) {
                    e = Pe[b][0],
                        d = Pe[b][2] !== !1;
                    break;
                }
            if (null == e)
                return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0,
                         c = Qe.length; c > b; b++)
                    if (Qe[b][1].exec(i[3])) {
                        f = (i[2] || ' ') + Qe[b][0];
                        break;
                    }
                if (null == f)
                    return void (a._isValid = !1);
            }
            if (!d && null != f)
                return void (a._isValid = !1);
            if (i[4]) {
                if (!Oe.exec(i[4]))
                    return void (a._isValid = !1);
                g = 'Z';
            }
            a._f = e + (f || '') + (g || ''),
                Ba(a);
        } else
            a._isValid = !1;
    }

    function na (b) {
        var c = Re.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (ma(b),
            void (b._isValid === !1 && (delete b._isValid,
                a.createFromInputFallback(b))));
    }

    function oa (a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a),
            h;
    }

    function pa (a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
            b;
    }

    function qa (a) {
        return ra(a) ? 366 : 365;
    }

    function ra (a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
    }

    function sa () {
        return ra(this.year());
    }

    function ta (a, b, c) {
        var d = 7 + b - c
            , e = (7 + pa(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1;
    }

    function ua (a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7, i = ta(a, d, e), j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1,
            g = qa(f) + j) : j > qa(a) ? (f = a + 1,
            g = j - qa(a)) : (f = a,
            g = j),
            {
                year: f,
                dayOfYear: g
            };
    }

    function va (a, b, c) {
        var d, e, f = ta(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1,
            d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c),
            e = a.year() + 1) : (e = a.year(),
            d = g),
            {
                week: d,
                year: e
            };
    }

    function wa (a, b, c) {
        var d = ta(a, b, c)
            , e = ta(a + 1, b, c);
        return (qa(a) - d + e) / 7;
    }

    function xa (a, b, c) {
        return null != a ? a : null != b ? b : c;
    }

    function ya (b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
    }

    function za (a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ya(a),
                 a._w && null == a._a[Ae] && null == a._a[ze] && Aa(a),
                 a._dayOfYear && (e = xa(a._a[ye], d[ye]),
                 a._dayOfYear > qa(e) && (j(a)._overflowDayOfYear = !0),
                     c = pa(e, 0, a._dayOfYear),
                     a._a[ze] = c.getUTCMonth(),
                     a._a[Ae] = c.getUTCDate()),
                     b = 0; 3 > b && null == a._a[b]; ++b)
                a._a[b] = f[b] = d[b];
            for (; 7 > b; b++)
                a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[Be] && 0 === a._a[Ce] && 0 === a._a[De] && 0 === a._a[Ee] && (a._nextDay = !0,
                a._a[Be] = 0),
                a._d = (a._useUTC ? pa : oa).apply(null, f),
            null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
            a._nextDay && (a._a[Be] = 24);
        }
    }

    function Aa (a) {
        var b, c, d, e, f, g, h, i;
        b = a._w,
            null != b.GG || null != b.W || null != b.E ? (f = 1,
                g = 4,
                c = xa(b.GG, a._a[ye], va(Ja(), 1, 4).year),
                d = xa(b.W, 1),
                e = xa(b.E, 1),
            (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow,
                g = a._locale._week.doy,
                c = xa(b.gg, a._a[ye], va(Ja(), f, g).year),
                d = xa(b.w, 1),
                null != b.d ? (e = b.d,
                (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f,
                (b.e < 0 || b.e > 6) && (i = !0)) : e = f),
            1 > d || d > wa(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g),
                a._a[ye] = h.year,
                a._dayOfYear = h.dayOfYear);
    }

    function Ba (b) {
        if (b._f === a.ISO_8601)
            return void ma(b);
        b._a = [],
            j(b).empty = !0;
        var c, d, e, f, g, h = '' + b._i, i = h.length, k = 0;
        for (e = V(b._f, b._locale).match(be) || [],
                 c = 0; c < e.length; c++)
            f = e[c],
                d = (h.match(X(f, b)) || [])[0],
            d && (g = h.substr(0, h.indexOf(d)),
            g.length > 0 && j(b).unusedInput.push(g),
                h = h.slice(h.indexOf(d) + d.length),
                k += d.length),
                ee[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f),
                    aa(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k,
        h.length > 0 && j(b).unusedInput.push(h),
        j(b).bigHour === !0 && b._a[Be] <= 12 && b._a[Be] > 0 && (j(b).bigHour = void 0),
            b._a[Be] = Ca(b._locale, b._a[Be], b._meridiem),
            za(b),
            la(b);
    }

    function Ca (a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c),
        d && 12 > b && (b += 12),
        d || 12 !== b || (b = 0),
            b) : b;
    }

    function Da (a) {
        var b, c, d, e, f;
        if (0 === a._f.length)
            return j(a).invalidFormat = !0,
                void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++)
            f = 0,
                b = n({}, a),
            null != a._useUTC && (b._useUTC = a._useUTC),
                b._f = a._f[e],
                Ba(b),
            k(b) && (f += j(b).charsLeftOver,
                f += 10 * j(b).unusedTokens.length,
                j(b).score = f,
            (null == d || d > f) && (d = f,
                c = b));
        g(a, c || b);
    }

    function Ea (a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                return a && parseInt(a, 10);
            }),
                za(a);
        }
    }

    function Fa (a) {
        var b = new o(la(Ga(a)));
        return b._nextDay && (b.add(1, 'd'),
            b._nextDay = void 0),
            b;
    }

    function Ga (a) {
        var b = a._i
            , e = a._f;
        return a._locale = a._locale || H(a._l),
            null === b || void 0 === e && '' === b ? l({
                nullInput: !0
            }) : ('string' == typeof b && (a._i = b = a._locale.preparse(b)),
                p(b) ? new o(la(b)) : (c(e) ? Da(a) : e ? Ba(a) : d(b) ? a._d = b : Ha(a),
                k(a) || (a._d = null),
                    a));
    }

    function Ha (b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : 'string' == typeof f ? na(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
            return parseInt(a, 10);
        }),
            za(b)) : 'object' == typeof f ? Ea(b) : 'number' == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b);
    }

    function Ia (a, b, c, d, e) {
        var f = {};
        return 'boolean' == typeof c && (d = c,
            c = void 0),
            f._isAMomentObject = !0,
            f._useUTC = f._isUTC = e,
            f._l = c,
            f._i = a,
            f._f = b,
            f._strict = d,
            Fa(f);
    }

    function Ja (a, b, c, d) {
        return Ia(a, b, c, d, !1);
    }

    function Ka (a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]),
                !b.length)
            return Ja();
        for (d = b[0],
                 e = 1; e < b.length; ++e)
            (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d;
    }

    function La () {
        var a = [].slice.call(arguments, 0);
        return Ka('isBefore', a);
    }

    function Ma () {
        var a = [].slice.call(arguments, 0);
        return Ka('isAfter', a);
    }

    function Na (a) {
        var b = L(a)
            , c = b.year || 0
            , d = b.quarter || 0
            , e = b.month || 0
            , f = b.week || 0
            , g = b.day || 0
            , h = b.hour || 0
            , i = b.minute || 0
            , j = b.second || 0
            , k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h,
            this._days = +g + 7 * f,
            this._months = +e + 3 * d + 12 * c,
            this._data = {},
            this._locale = H(),
            this._bubble();
    }

    function Oa (a) {
        return a instanceof Na;
    }

    function Pa (a, b) {
        R(a, 0, 0, function () {
            var a = this.utcOffset()
                , c = '+';
            return 0 > a && (a = -a,
                c = '-'),
            c + Q(~~(a / 60), 2) + b + Q(~~a % 60, 2);
        });
    }

    function Qa (a, b) {
        var c = (b || '').match(a) || []
            , d = c[c.length - 1] || []
            , e = (d + '').match(We) || ['-', 0, 0]
            , f = +(60 * e[1]) + r(e[2]);
        return '+' === e[0] ? f : -f;
    }

    function Ra (b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(),
            f = (p(b) || d(b) ? +b : +Ja(b)) - +e,
            e._d.setTime(+e._d + f),
            a.updateOffset(e, !1),
            e) : Ja(b).local();
    }

    function Sa (a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }

    function Ta (b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ('string' == typeof b ? b = Qa(te, b) : Math.abs(b) < 16 && (b = 60 * b),
        !this._isUTC && c && (d = Sa(this)),
            this._offset = b,
            this._isUTC = !0,
        null != d && this.add(d, 'm'),
        e !== b && (!c || this._changeInProgress ? ib(this, cb(b - e, 'm'), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            a.updateOffset(this, !0),
            this._changeInProgress = null)),
            this) : this._isUTC ? e : Sa(this) : null != b ? this : NaN;
    }

    function Ua (a, b) {
        return null != a ? ('string' != typeof a && (a = -a),
            this.utcOffset(a, b),
            this) : -this.utcOffset();
    }

    function Va (a) {
        return this.utcOffset(0, a);
    }

    function Wa (a) {
        return this._isUTC && (this.utcOffset(0, a),
            this._isUTC = !1,
        a && this.subtract(Sa(this), 'm')),
            this;
    }

    function Xa () {
        return this._tzm ? this.utcOffset(this._tzm) : 'string' == typeof this._i && this.utcOffset(Qa(se, this._i)),
            this;
    }

    function Ya (a) {
        return this.isValid() ? (a = a ? Ja(a).utcOffset() : 0,
        (this.utcOffset() - a) % 60 === 0) : !1;
    }

    function Za () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function $a () {
        if (!m(this._isDSTShifted))
            return this._isDSTShifted;
        var a = {};
        if (n(a, this),
                a = Ga(a),
                a._a) {
            var b = a._isUTC ? h(a._a) : Ja(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted;
    }

    function _a () {
        return this.isValid() ? !this._isUTC : !1;
    }

    function ab () {
        return this.isValid() ? this._isUTC : !1;
    }

    function bb () {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1;
    }

    function cb (a, b) {
        var c, d, e, g = a, h = null;
        return Oa(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : 'number' == typeof a ? (g = {},
            b ? g[b] = a : g.milliseconds = a) : (h = Xe.exec(a)) ? (c = '-' === h[1] ? -1 : 1,
            g = {
                y: 0,
                d: r(h[Ae]) * c,
                h: r(h[Be]) * c,
                m: r(h[Ce]) * c,
                s: r(h[De]) * c,
                ms: r(h[Ee]) * c
            }) : (h = Ye.exec(a)) ? (c = '-' === h[1] ? -1 : 1,
            g = {
                y: db(h[2], c),
                M: db(h[3], c),
                w: db(h[4], c),
                d: db(h[5], c),
                h: db(h[6], c),
                m: db(h[7], c),
                s: db(h[8], c)
            }) : null == g ? g = {} : 'object' == typeof g && ('from' in g || 'to' in g) && (e = fb(Ja(g.from), Ja(g.to)),
            g = {},
            g.ms = e.milliseconds,
            g.M = e.months),
            d = new Na(g),
        Oa(a) && f(a, '_locale') && (d._locale = a._locale),
            d;
    }

    function db (a, b) {
        var c = a && parseFloat(a.replace(',', '.'));
        return (isNaN(c) ? 0 : c) * b;
    }

    function eb (a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()),
        a.clone().add(c.months, 'M').isAfter(b) && --c.months,
            c.milliseconds = +b - +a.clone().add(c.months, 'M'),
            c;
    }

    function fb (a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ra(b, a),
            a.isBefore(b) ? c = eb(a, b) : (c = eb(b, a),
                c.milliseconds = -c.milliseconds,
                c.months = -c.months),
            c) : {
            milliseconds: 0,
            months: 0
        };
    }

    function gb (a) {
        return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a);
    }

    function hb (a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (v(b, 'moment().' + b + '(period, number) is deprecated. Please use moment().' + b + '(number, period).'),
                f = c,
                c = d,
                d = f),
                c = 'string' == typeof c ? +c : c,
                e = cb(c, d),
                ib(this, e, a),
                this;
        };
    }

    function ib (b, c, d, e) {
        var f = c._milliseconds
            , g = gb(c._days)
            , h = gb(c._months);
        b.isValid() && (e = null == e ? !0 : e,
        f && b._d.setTime(+b._d + f * d),
        g && O(b, 'Date', N(b, 'Date') + g * d),
        h && fa(b, N(b, 'Month') + h * d),
        e && a.updateOffset(b, g || h));
    }

    function jb (a, b) {
        var c = a || Ja()
            , d = Ra(c, this).startOf('day')
            , e = this.diff(d, 'days', !0)
            ,
            f = -6 > e ? 'sameElse' : -1 > e ? 'lastWeek' : 0 > e ? 'lastDay' : 1 > e ? 'sameDay' : 2 > e ? 'nextDay' : 7 > e ? 'nextWeek' : 'sameElse'
            , g = b && (w(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Ja(c)));
    }

    function kb () {
        return new o(this);
    }

    function lb (a, b) {
        var c = p(a) ? a : Ja(a);
        return this.isValid() && c.isValid() ? (b = K(m(b) ? 'millisecond' : b),
            'millisecond' === b ? +this > +c : +c < +this.clone().startOf(b)) : !1;
    }

    function mb (a, b) {
        var c = p(a) ? a : Ja(a);
        return this.isValid() && c.isValid() ? (b = K(m(b) ? 'millisecond' : b),
            'millisecond' === b ? +c > +this : +this.clone().endOf(b) < +c) : !1;
    }

    function nb (a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c);
    }

    function ob (a, b) {
        var c, d = p(a) ? a : Ja(a);
        return this.isValid() && d.isValid() ? (b = K(b || 'millisecond'),
            'millisecond' === b ? +this === +d : (c = +d,
            +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1;
    }

    function pb (a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }

    function qb (a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }

    function rb (a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ra(a, this),
            d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()),
                b = K(b),
                'year' === b || 'month' === b || 'quarter' === b ? (g = sb(this, d),
                    'quarter' === b ? g /= 3 : 'year' === b && (g /= 12)) : (f = this - d,
                    g = 'second' === b ? f / 1e3 : 'minute' === b ? f / 6e4 : 'hour' === b ? f / 36e5 : 'day' === b ? (f - e) / 864e5 : 'week' === b ? (f - e) / 6048e5 : f),
                c ? g : q(g)) : NaN) : NaN;
    }

    function sb (a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, 'months');
        return 0 > b - f ? (c = a.clone().add(e - 1, 'months'),
            d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, 'months'),
            d = (b - f) / (c - f)),
            -(e + d);
    }

    function tb () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function ub () {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : U(a, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]') : U(a, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }

    function vb (b) {
        var c = U(this, b || a.defaultFormat);
        return this.localeData().postformat(c);
    }

    function wb (a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }

    function xb (a) {
        return this.from(Ja(), a);
    }

    function yb (a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }

    function zb (a) {
        return this.to(Ja(), a);
    }

    function Ab (a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = H(a),
        null != b && (this._locale = b),
            this);
    }

    function Bb () {
        return this._locale;
    }

    function Cb (a) {
        switch (a = K(a)) {
            case 'year':
                this.month(0);
            case 'quarter':
            case 'month':
                this.date(1);
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
            case 'hour':
                this.minutes(0);
            case 'minute':
                this.seconds(0);
            case 'second':
                this.milliseconds(0);
        }
        return 'week' === a && this.weekday(0),
        'isoWeek' === a && this.isoWeekday(1),
        'quarter' === a && this.month(3 * Math.floor(this.month() / 3)),
            this;
    }

    function Db (a) {
        return a = K(a),
            void 0 === a || 'millisecond' === a ? this : this.startOf(a).add(1, 'isoWeek' === a ? 'week' : a).subtract(1, 'ms');
    }

    function Eb () {
        return +this._d - 6e4 * (this._offset || 0);
    }

    function Fb () {
        return Math.floor(+this / 1e3);
    }

    function Gb () {
        return this._offset ? new Date(+this) : this._d;
    }

    function Hb () {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
    }

    function Ib () {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        };
    }

    function Jb () {
        return this.isValid() ? this.toISOString() : null;
    }

    function Kb () {
        return k(this);
    }

    function Lb () {
        return g({}, j(this));
    }

    function Mb () {
        return j(this).overflow;
    }

    function Nb () {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    function Ob (a, b) {
        R(0, [a, a.length], 0, b);
    }

    function Pb (a) {
        return Tb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function Qb (a) {
        return Tb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function Rb () {
        return wa(this.year(), 1, 4);
    }

    function Sb () {
        var a = this.localeData()._week;
        return wa(this.year(), a.dow, a.doy);
    }

    function Tb (a, b, c, d, e) {
        var f;
        return null == a ? va(this, d, e).year : (f = wa(a, d, e),
        b > f && (b = f),
            Ub.call(this, a, b, c, d, e));
    }

    function Ub (a, b, c, d, e) {
        var f = ua(a, b, c, d, e)
            , g = pa(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()),
            this.month(g.getUTCMonth()),
            this.date(g.getUTCDate()),
            this;
    }

    function Vb (a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }

    function Wb (a) {
        return va(a, this._week.dow, this._week.doy).week;
    }

    function Xb () {
        return this._week.dow;
    }

    function Yb () {
        return this._week.doy;
    }

    function Zb (a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), 'd');
    }

    function $b (a) {
        var b = va(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), 'd');
    }

    function _b (a, b) {
        return 'string' != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a),
            'number' == typeof a ? a : null) : parseInt(a, 10);
    }

    function ac (a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? 'format' : 'standalone'][a.day()];
    }

    function bc (a) {
        return this._weekdaysShort[a.day()];
    }

    function cc (a) {
        return this._weekdaysMin[a.day()];
    }

    function dc (a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [],
            this._minWeekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._fullWeekdaysParse = []),
                 d = 0; 7 > d; d++) {
            if (e = Ja([2e3, 1]).day(d),
                c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp('^' + this.weekdays(e, '').replace('.', '.?') + '$', 'i'),
                    this._shortWeekdaysParse[d] = new RegExp('^' + this.weekdaysShort(e, '').replace('.', '.?') + '$', 'i'),
                    this._minWeekdaysParse[d] = new RegExp('^' + this.weekdaysMin(e, '').replace('.', '.?') + '$', 'i')),
                this._weekdaysParse[d] || (f = '^' + this.weekdays(e, '') + '|^' + this.weekdaysShort(e, '') + '|^' + this.weekdaysMin(e, ''),
                    this._weekdaysParse[d] = new RegExp(f.replace('.', ''), 'i')),
                c && 'dddd' === b && this._fullWeekdaysParse[d].test(a))
                return d;
            if (c && 'ddd' === b && this._shortWeekdaysParse[d].test(a))
                return d;
            if (c && 'dd' === b && this._minWeekdaysParse[d].test(a))
                return d;
            if (!c && this._weekdaysParse[d].test(a))
                return d;
        }
    }

    function ec (a) {
        if (!this.isValid())
            return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = _b(a, this.localeData()),
            this.add(a - b, 'd')) : b;
    }

    function fc (a) {
        if (!this.isValid())
            return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, 'd');
    }

    function gc (a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN;
    }

    function hc (a) {
        var b = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return null == a ? b : this.add(a - b, 'd');
    }

    function ic () {
        return this.hours() % 12 || 12;
    }

    function jc (a, b) {
        R(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }

    function kc (a, b) {
        return b._meridiemParse;
    }

    function lc (a) {
        return 'p' === (a + '').toLowerCase().charAt(0);
    }

    function mc (a, b, c) {
        return a > 11 ? c ? 'pm' : 'PM' : c ? 'am' : 'AM';
    }

    function nc (a, b) {
        b[Ee] = r(1e3 * ('0.' + a));
    }

    function oc () {
        return this._isUTC ? 'UTC' : '';
    }

    function pc () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    function qc (a) {
        return Ja(1e3 * a);
    }

    function rc () {
        return Ja.apply(null, arguments).parseZone();
    }

    function sc (a, b, c) {
        var d = this._calendar[a];
        return w(d) ? d.call(b, c) : d;
    }

    function tc (a) {
        var b = this._longDateFormat[a]
            , c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1);
        }),
            this._longDateFormat[a]);
    }

    function uc () {
        return this._invalidDate;
    }

    function vc (a) {
        return this._ordinal.replace('%d', a);
    }

    function wc (a) {
        return a;
    }

    function xc (a, b, c, d) {
        var e = this._relativeTime[c];
        return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }

    function yc (a, b) {
        var c = this._relativeTime[a > 0 ? 'future' : 'past'];
        return w(c) ? c(b) : c.replace(/%s/i, b);
    }

    function zc (a, b, c, d) {
        var e = H()
            , f = h().set(d, b);
        return e[c](f, a);
    }

    function Ac (a, b, c, d, e) {
        if ('number' == typeof a && (b = a,
                a = void 0),
                a = a || '',
            null != b)
            return zc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++)
            g[f] = zc(a, f, c, e);
        return g;
    }

    function Bc (a, b) {
        return Ac(a, b, 'months', 12, 'month');
    }

    function Cc (a, b) {
        return Ac(a, b, 'monthsShort', 12, 'month');
    }

    function Dc (a, b) {
        return Ac(a, b, 'weekdays', 7, 'day');
    }

    function Ec (a, b) {
        return Ac(a, b, 'weekdaysShort', 7, 'day');
    }

    function Fc (a, b) {
        return Ac(a, b, 'weekdaysMin', 7, 'day');
    }

    function Gc () {
        var a = this._data;
        return this._milliseconds = vf(this._milliseconds),
            this._days = vf(this._days),
            this._months = vf(this._months),
            a.milliseconds = vf(a.milliseconds),
            a.seconds = vf(a.seconds),
            a.minutes = vf(a.minutes),
            a.hours = vf(a.hours),
            a.months = vf(a.months),
            a.years = vf(a.years),
            this;
    }

    function Hc (a, b, c, d) {
        var e = cb(b, c);
        return a._milliseconds += d * e._milliseconds,
            a._days += d * e._days,
            a._months += d * e._months,
            a._bubble();
    }

    function Ic (a, b) {
        return Hc(this, a, b, 1);
    }

    function Jc (a, b) {
        return Hc(this, a, b, -1);
    }

    function Kc (a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a);
    }

    function Lc () {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Kc(Nc(h) + g),
            g = 0,
            h = 0),
            i.milliseconds = f % 1e3,
            a = q(f / 1e3),
            i.seconds = a % 60,
            b = q(a / 60),
            i.minutes = b % 60,
            c = q(b / 60),
            i.hours = c % 24,
            g += q(c / 24),
            e = q(Mc(g)),
            h += e,
            g -= Kc(Nc(e)),
            d = q(h / 12),
            h %= 12,
            i.days = g,
            i.months = h,
            i.years = d,
            this;
    }

    function Mc (a) {
        return 4800 * a / 146097;
    }

    function Nc (a) {
        return 146097 * a / 4800;
    }

    function Oc (a) {
        var b, c, d = this._milliseconds;
        if (a = K(a),
            'month' === a || 'year' === a)
            return b = this._days + d / 864e5,
                c = this._months + Mc(b),
                'month' === a ? c : c / 12;
        switch (b = this._days + Math.round(Nc(this._months)),
            a) {
            case 'week':
                return b / 7 + d / 6048e5;
            case 'day':
                return b + d / 864e5;
            case 'hour':
                return 24 * b + d / 36e5;
            case 'minute':
                return 1440 * b + d / 6e4;
            case 'second':
                return 86400 * b + d / 1e3;
            case 'millisecond':
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error('Unknown unit ' + a);
        }
    }

    function Pc () {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12);
    }

    function Qc (a) {
        return function () {
            return this.as(a);
        };
    }

    function Rc (a) {
        return a = K(a),
            this[a + 's']();
    }

    function Sc (a) {
        return function () {
            return this._data[a];
        };
    }

    function Tc () {
        return q(this.days() / 7);
    }

    function Uc (a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }

    function Vc (a, b, c) {
        var d = cb(a).abs()
            , e = Lf(d.as('s'))
            , f = Lf(d.as('m'))
            , g = Lf(d.as('h'))
            , h = Lf(d.as('d'))
            , i = Lf(d.as('M'))
            , j = Lf(d.as('y'))
            ,
            k = e < Mf.s && ['s', e] || 1 >= f && ['m'] || f < Mf.m && ['mm', f] || 1 >= g && ['h'] || g < Mf.h && ['hh', g] || 1 >= h && ['d'] || h < Mf.d && ['dd', h] || 1 >= i && ['M'] || i < Mf.M && ['MM', i] || 1 >= j && ['y'] || ['yy', j];
        return k[2] = b,
            k[3] = +a > 0,
            k[4] = c,
            Uc.apply(null, k);
    }

    function Wc (a, b) {
        return void 0 === Mf[a] ? !1 : void 0 === b ? Mf[a] : (Mf[a] = b,
            !0);
    }

    function Xc (a) {
        var b = this.localeData()
            , c = Vc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)),
            b.postformat(c);
    }

    function Yc () {
        var a, b, c, d = Nf(this._milliseconds) / 1e3, e = Nf(this._days), f = Nf(this._months);
        a = q(d / 60),
            b = q(a / 60),
            d %= 60,
            a %= 60,
            c = q(f / 12),
            f %= 12;
        var g = c
            , h = f
            , i = e
            , j = b
            , k = a
            , l = d
            , m = this.asSeconds();
        return m ? (0 > m ? '-' : '') + 'P' + (g ? g + 'Y' : '') + (h ? h + 'M' : '') + (i ? i + 'D' : '') + (j || k || l ? 'T' : '') + (j ? j + 'H' : '') + (k ? k + 'M' : '') + (l ? l + 'S' : '') : 'P0D';
    }

    function dd (a) {
        var b = {
            m: 'v',
            b: 'v',
            d: 'z'
        };
        return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1);
    }

    function nd (a, b, c, d) {
        var e = a;
        switch (c) {
            case 's':
                return d || b ? 'néhány másodperc' : 'néhány másodperce';
            case 'm':
                return 'egy' + (d || b ? ' perc' : ' perce');
            case 'mm':
                return e + (d || b ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (d || b ? ' óra' : ' órája');
            case 'hh':
                return e + (d || b ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (d || b ? ' nap' : ' napja');
            case 'dd':
                return e + (d || b ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (d || b ? ' hónap' : ' hónapja');
            case 'MM':
                return e + (d || b ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (d || b ? ' év' : ' éve');
            case 'yy':
                return e + (d || b ? ' év' : ' éve');
        }
        return '';
    }

    function rd (a, b, c, d) {
        var e = {
            m: ['eng Minutt', 'enger Minutt'],
            h: ['eng Stonn', 'enger Stonn'],
            d: ['een Dag', 'engem Dag'],
            M: ['ee Mount', 'engem Mount'],
            y: ['ee Joer', 'engem Joer']
        };
        return b ? e[c][0] : e[c][1];
    }

    var Wd, Xd = a.momentProperties = [], Yd = !1, Zd = {};
    a.suppressDeprecationWarnings = !1;
    var $d, _d = {}, ae = {},
        be = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ce = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, de = {}, ee = {}, fe = /\d/, ge = /\d\d/, he = /\d{3}/,
        ie = /\d{4}/, je = /[+-]?\d{6}/, ke = /\d\d?/, le = /\d\d\d\d?/, me = /\d\d\d\d\d\d?/, ne = /\d{1,3}/,
        oe = /\d{1,4}/, pe = /[+-]?\d{1,6}/, qe = /\d+/, re = /[+-]?\d+/, se = /Z|[+-]\d\d:?\d\d/gi,
        te = /Z|[+-]\d\d(?::?\d\d)?/gi, ue = /[+-]?\d+(\.\d{1,3})?/,
        ve = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        we = {}, xe = {}, ye = 0, ze = 1, Ae = 2, Be = 3, Ce = 4, De = 5, Ee = 6, Fe = 7, Ge = 8;
    R('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    }),
        R('MMM', 0, 0, function (a) {
            return this.localeData().monthsShort(this, a);
        }),
        R('MMMM', 0, 0, function (a) {
            return this.localeData().months(this, a);
        }),
        J('month', 'M'),
        W('M', ke),
        W('MM', ke, ge),
        W('MMM', function (a, b) {
            return b.monthsShortRegex(a);
        }),
        W('MMMM', function (a, b) {
            return b.monthsRegex(a);
        }),
        $(['M', 'MM'], function (a, b) {
            b[ze] = r(a) - 1;
        }),
        $(['MMM', 'MMMM'], function (a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            null != e ? b[ze] = e : j(c).invalidMonth = a;
        });
    var He = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/
        , Ie = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
        , Je = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_')
        , Ke = ve
        , Le = ve
        ,
        Me = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
        ,
        Ne = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/
        , Oe = /Z|[+-]\d\d(?::?\d\d)?/
        ,
        Pe = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, !1], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, !1], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, !1], ['YYYYDDD', /\d{7}/]]
        ,
        Qe = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]]
        , Re = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = u('moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.', function (a) {
        a._d = new Date(a._i + (a._useUTC ? ' UTC' : ''));
    }),
        R('Y', 0, 0, function () {
            var a = this.year();
            return 9999 >= a ? '' + a : '+' + a;
        }),
        R(0, ['YY', 2], 0, function () {
            return this.year() % 100;
        }),
        R(0, ['YYYY', 4], 0, 'year'),
        R(0, ['YYYYY', 5], 0, 'year'),
        R(0, ['YYYYYY', 6, !0], 0, 'year'),
        J('year', 'y'),
        W('Y', re),
        W('YY', ke, ge),
        W('YYYY', oe, ie),
        W('YYYYY', pe, je),
        W('YYYYYY', pe, je),
        $(['YYYYY', 'YYYYYY'], ye),
        $('YYYY', function (b, c) {
            c[ye] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
        }),
        $('YY', function (b, c) {
            c[ye] = a.parseTwoDigitYear(b);
        }),
        $('Y', function (a, b) {
            b[ye] = parseInt(a, 10);
        }),
        a.parseTwoDigitYear = function (a) {
            return r(a) + (r(a) > 68 ? 1900 : 2e3);
        }
    ;
    var Se = M('FullYear', !1);
    a.ISO_8601 = function () {
    }
    ;
    var Te = u('moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function () {
            var a = Ja.apply(null, arguments);
            return this.isValid() && a.isValid() ? this > a ? this : a : l();
        })
        ,
        Ue = u('moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function () {
            var a = Ja.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : l();
        })
        , Ve = function () {
            return Date.now ? Date.now() : +new Date;
        };
    Pa('Z', ':'),
        Pa('ZZ', ''),
        W('Z', te),
        W('ZZ', te),
        $(['Z', 'ZZ'], function (a, b, c) {
            c._useUTC = !0,
                c._tzm = Qa(te, a);
        });
    var We = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {
    }
    ;
    var Xe = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/
        ,
        Ye = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
    cb.fn = Na.prototype;
    var Ze = hb(1, 'add')
        , $e = hb(-1, 'subtract');
    a.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    var _e = u('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });
    R(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    }),
        R(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
        }),
        Ob('gggg', 'weekYear'),
        Ob('ggggg', 'weekYear'),
        Ob('GGGG', 'isoWeekYear'),
        Ob('GGGGG', 'isoWeekYear'),
        J('weekYear', 'gg'),
        J('isoWeekYear', 'GG'),
        W('G', re),
        W('g', re),
        W('GG', ke, ge),
        W('gg', ke, ge),
        W('GGGG', oe, ie),
        W('gggg', oe, ie),
        W('GGGGG', pe, je),
        W('ggggg', pe, je),
        _(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (a, b, c, d) {
            b[d.substr(0, 2)] = r(a);
        }),
        _(['gg', 'GG'], function (b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b);
        }),
        R('Q', 0, 'Qo', 'quarter'),
        J('quarter', 'Q'),
        W('Q', fe),
        $('Q', function (a, b) {
            b[ze] = 3 * (r(a) - 1);
        }),
        R('w', ['ww', 2], 'wo', 'week'),
        R('W', ['WW', 2], 'Wo', 'isoWeek'),
        J('week', 'w'),
        J('isoWeek', 'W'),
        W('w', ke),
        W('ww', ke, ge),
        W('W', ke),
        W('WW', ke, ge),
        _(['w', 'ww', 'W', 'WW'], function (a, b, c, d) {
            b[d.substr(0, 1)] = r(a);
        });
    var af = {
        dow: 0,
        doy: 6
    };
    R('D', ['DD', 2], 'Do', 'date'),
        J('date', 'D'),
        W('D', ke),
        W('DD', ke, ge),
        W('Do', function (a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient;
        }),
        $(['D', 'DD'], Ae),
        $('Do', function (a, b) {
            b[Ae] = r(a.match(ke)[0], 10);
        });
    var bf = M('Date', !0);
    R('d', 0, 'do', 'day'),
        R('dd', 0, 0, function (a) {
            return this.localeData().weekdaysMin(this, a);
        }),
        R('ddd', 0, 0, function (a) {
            return this.localeData().weekdaysShort(this, a);
        }),
        R('dddd', 0, 0, function (a) {
            return this.localeData().weekdays(this, a);
        }),
        R('e', 0, 0, 'weekday'),
        R('E', 0, 0, 'isoWeekday'),
        J('day', 'd'),
        J('weekday', 'e'),
        J('isoWeekday', 'E'),
        W('d', ke),
        W('e', ke),
        W('E', ke),
        W('dd', ve),
        W('ddd', ve),
        W('dddd', ve),
        _(['dd', 'ddd', 'dddd'], function (a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            null != e ? b.d = e : j(c).invalidWeekday = a;
        }),
        _(['d', 'e', 'E'], function (a, b, c, d) {
            b[d] = r(a);
        });
    var cf = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_')
        , df = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_')
        , ef = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    R('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
        J('dayOfYear', 'DDD'),
        W('DDD', ne),
        W('DDDD', he),
        $(['DDD', 'DDDD'], function (a, b, c) {
            c._dayOfYear = r(a);
        }),
        R('H', ['HH', 2], 0, 'hour'),
        R('h', ['hh', 2], 0, ic),
        R('hmm', 0, 0, function () {
            return '' + ic.apply(this) + Q(this.minutes(), 2);
        }),
        R('hmmss', 0, 0, function () {
            return '' + ic.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
        }),
        R('Hmm', 0, 0, function () {
            return '' + this.hours() + Q(this.minutes(), 2);
        }),
        R('Hmmss', 0, 0, function () {
            return '' + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
        }),
        jc('a', !0),
        jc('A', !1),
        J('hour', 'h'),
        W('a', kc),
        W('A', kc),
        W('H', ke),
        W('h', ke),
        W('HH', ke, ge),
        W('hh', ke, ge),
        W('hmm', le),
        W('hmmss', me),
        W('Hmm', le),
        W('Hmmss', me),
        $(['H', 'HH'], Be),
        $(['a', 'A'], function (a, b, c) {
            c._isPm = c._locale.isPM(a),
                c._meridiem = a;
        }),
        $(['h', 'hh'], function (a, b, c) {
            b[Be] = r(a),
                j(c).bigHour = !0;
        }),
        $('hmm', function (a, b, c) {
            var d = a.length - 2;
            b[Be] = r(a.substr(0, d)),
                b[Ce] = r(a.substr(d)),
                j(c).bigHour = !0;
        }),
        $('hmmss', function (a, b, c) {
            var d = a.length - 4
                , e = a.length - 2;
            b[Be] = r(a.substr(0, d)),
                b[Ce] = r(a.substr(d, 2)),
                b[De] = r(a.substr(e)),
                j(c).bigHour = !0;
        }),
        $('Hmm', function (a, b, c) {
            var d = a.length - 2;
            b[Be] = r(a.substr(0, d)),
                b[Ce] = r(a.substr(d));
        }),
        $('Hmmss', function (a, b, c) {
            var d = a.length - 4
                , e = a.length - 2;
            b[Be] = r(a.substr(0, d)),
                b[Ce] = r(a.substr(d, 2)),
                b[De] = r(a.substr(e));
        });
    var ff = /[ap]\.?m?\.?/i
        , gf = M('Hours', !0);
    R('m', ['mm', 2], 0, 'minute'),
        J('minute', 'm'),
        W('m', ke),
        W('mm', ke, ge),
        $(['m', 'mm'], Ce);
    var hf = M('Minutes', !1);
    R('s', ['ss', 2], 0, 'second'),
        J('second', 's'),
        W('s', ke),
        W('ss', ke, ge),
        $(['s', 'ss'], De);
    var jf = M('Seconds', !1);
    R('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    }),
        R(0, ['SS', 2], 0, function () {
            return ~~(this.millisecond() / 10);
        }),
        R(0, ['SSS', 3], 0, 'millisecond'),
        R(0, ['SSSS', 4], 0, function () {
            return 10 * this.millisecond();
        }),
        R(0, ['SSSSS', 5], 0, function () {
            return 100 * this.millisecond();
        }),
        R(0, ['SSSSSS', 6], 0, function () {
            return 1e3 * this.millisecond();
        }),
        R(0, ['SSSSSSS', 7], 0, function () {
            return 1e4 * this.millisecond();
        }),
        R(0, ['SSSSSSSS', 8], 0, function () {
            return 1e5 * this.millisecond();
        }),
        R(0, ['SSSSSSSSS', 9], 0, function () {
            return 1e6 * this.millisecond();
        }),
        J('millisecond', 'ms'),
        W('S', ne, fe),
        W('SS', ne, ge),
        W('SSS', ne, he);
    var kf;
    for (kf = 'SSSS'; kf.length <= 9; kf += 'S')
        W(kf, qe);
    for (kf = 'S'; kf.length <= 9; kf += 'S')
        $(kf, nc);
    var lf = M('Milliseconds', !1);
    R('z', 0, 0, 'zoneAbbr'),
        R('zz', 0, 0, 'zoneName');
    var mf = o.prototype;
    mf.add = Ze,
        mf.calendar = jb,
        mf.clone = kb,
        mf.diff = rb,
        mf.endOf = Db,
        mf.format = vb,
        mf.from = wb,
        mf.fromNow = xb,
        mf.to = yb,
        mf.toNow = zb,
        mf.get = P,
        mf.invalidAt = Mb,
        mf.isAfter = lb,
        mf.isBefore = mb,
        mf.isBetween = nb,
        mf.isSame = ob,
        mf.isSameOrAfter = pb,
        mf.isSameOrBefore = qb,
        mf.isValid = Kb,
        mf.lang = _e,
        mf.locale = Ab,
        mf.localeData = Bb,
        mf.max = Ue,
        mf.min = Te,
        mf.parsingFlags = Lb,
        mf.set = P,
        mf.startOf = Cb,
        mf.subtract = $e,
        mf.toArray = Hb,
        mf.toObject = Ib,
        mf.toDate = Gb,
        mf.toISOString = ub,
        mf.toJSON = Jb,
        mf.toString = tb,
        mf.unix = Fb,
        mf.valueOf = Eb,
        mf.creationData = Nb,
        mf.year = Se,
        mf.isLeapYear = sa,
        mf.weekYear = Pb,
        mf.isoWeekYear = Qb,
        mf.quarter = mf.quarters = Vb,
        mf.month = ga,
        mf.daysInMonth = ha,
        mf.week = mf.weeks = Zb,
        mf.isoWeek = mf.isoWeeks = $b,
        mf.weeksInYear = Sb,
        mf.isoWeeksInYear = Rb,
        mf.date = bf,
        mf.day = mf.days = ec,
        mf.weekday = fc,
        mf.isoWeekday = gc,
        mf.dayOfYear = hc,
        mf.hour = mf.hours = gf,
        mf.minute = mf.minutes = hf,
        mf.second = mf.seconds = jf,
        mf.millisecond = mf.milliseconds = lf,
        mf.utcOffset = Ta,
        mf.utc = Va,
        mf.local = Wa,
        mf.parseZone = Xa,
        mf.hasAlignedHourOffset = Ya,
        mf.isDST = Za,
        mf.isDSTShifted = $a,
        mf.isLocal = _a,
        mf.isUtcOffset = ab,
        mf.isUtc = bb,
        mf.isUTC = bb,
        mf.zoneAbbr = oc,
        mf.zoneName = pc,
        mf.dates = u('dates accessor is deprecated. Use date instead.', bf),
        mf.months = u('months accessor is deprecated. Use month instead', ga),
        mf.years = u('years accessor is deprecated. Use year instead', Se),
        mf.zone = u('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', Ua);
    var nf = mf
        , of = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    }
        , pf = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    }
        , qf = 'Invalid date'
        , rf = '%d'
        , sf = /\d{1,2}/
        , tf = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    }
        , uf = A.prototype;
    uf._calendar = of,
        uf.calendar = sc,
        uf._longDateFormat = pf,
        uf.longDateFormat = tc,
        uf._invalidDate = qf,
        uf.invalidDate = uc,
        uf._ordinal = rf,
        uf.ordinal = vc,
        uf._ordinalParse = sf,
        uf.preparse = wc,
        uf.postformat = wc,
        uf._relativeTime = tf,
        uf.relativeTime = xc,
        uf.pastFuture = yc,
        uf.set = y,
        uf.months = ca,
        uf._months = Ie,
        uf.monthsShort = da,
        uf._monthsShort = Je,
        uf.monthsParse = ea,
        uf._monthsRegex = Le,
        uf.monthsRegex = ja,
        uf._monthsShortRegex = Ke,
        uf.monthsShortRegex = ia,
        uf.week = Wb,
        uf._week = af,
        uf.firstDayOfYear = Yb,
        uf.firstDayOfWeek = Xb,
        uf.weekdays = ac,
        uf._weekdays = cf,
        uf.weekdaysMin = cc,
        uf._weekdaysMin = ef,
        uf.weekdaysShort = bc,
        uf._weekdaysShort = df,
        uf.weekdaysParse = dc,
        uf.isPM = lc,
        uf._meridiemParse = ff,
        uf.meridiem = mc,
        E('en', {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (a) {
                var b = a % 10
                    , c = 1 === r(a % 100 / 10) ? 'th' : 1 === b ? 'st' : 2 === b ? 'nd' : 3 === b ? 'rd' : 'th';
                return a + c;
            }
        }),
        a.lang = u('moment.lang is deprecated. Use moment.locale instead.', E),
        a.langData = u('moment.langData is deprecated. Use moment.localeData instead.', H);
    var vf = Math.abs
        , wf = Qc('ms')
        , xf = Qc('s')
        , yf = Qc('m')
        , zf = Qc('h')
        , Af = Qc('d')
        , Bf = Qc('w')
        , Cf = Qc('M')
        , Df = Qc('y')
        , Ef = Sc('milliseconds')
        , Ff = Sc('seconds')
        , Gf = Sc('minutes')
        , Hf = Sc('hours')
        , If = Sc('days')
        , Jf = Sc('months')
        , Kf = Sc('years')
        , Lf = Math.round
        , Mf = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
        , Nf = Math.abs
        , Of = Na.prototype;
    Of.abs = Gc,
        Of.add = Ic,
        Of.subtract = Jc,
        Of.as = Oc,
        Of.asMilliseconds = wf,
        Of.asSeconds = xf,
        Of.asMinutes = yf,
        Of.asHours = zf,
        Of.asDays = Af,
        Of.asWeeks = Bf,
        Of.asMonths = Cf,
        Of.asYears = Df,
        Of.valueOf = Pc,
        Of._bubble = Lc,
        Of.get = Rc,
        Of.milliseconds = Ef,
        Of.seconds = Ff,
        Of.minutes = Gf,
        Of.hours = Hf,
        Of.days = If,
        Of.weeks = Tc,
        Of.months = Jf,
        Of.years = Kf,
        Of.humanize = Xc,
        Of.toISOString = Yc,
        Of.toString = Yc,
        Of.toJSON = Yc,
        Of.locale = Ab,
        Of.localeData = Bb,
        Of.toIsoString = u('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', Yc),
        Of.lang = _e,
        R('X', 0, 0, 'unix'),
        R('x', 0, 0, 'valueOf'),
        W('x', re),
        W('X', ue),
        $('X', function (a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10));
        }),
        $('x', function (a, b, c) {
            c._d = new Date(r(a));
        }),
        a.version = '2.12.0',
        b(Ja),
        a.fn = nf,
        a.min = La,
        a.max = Ma,
        a.now = Ve,
        a.utc = h,
        a.unix = qc,
        a.months = Bc,
        a.isDate = d,
        a.locale = E,
        a.invalid = l,
        a.duration = cb,
        a.isMoment = p,
        a.weekdays = Dc,
        a.parseZone = rc,
        a.localeData = H,
        a.isDuration = Oa,
        a.monthsShort = Cc,
        a.weekdaysMin = Fc,
        a.defineLocale = F,
        a.updateLocale = G,
        a.locales = I,
        a.weekdaysShort = Ec,
        a.normalizeUnits = K,
        a.relativeTimeThreshold = Wc,
        a.prototype = nf;
    var Pf = a
        , Ug = (Pf.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'Ah点mm分',
            LTS: 'Ah点m分s秒',
            L: 'YYYY-MM-DD',
            LL: 'YYYY年MMMD日',
            LLL: 'YYYY年MMMD日Ah点mm分',
            LLLL: 'YYYY年MMMD日ddddAh点mm分',
            l: 'YYYY-MM-DD',
            ll: 'YYYY年MMMD日',
            lll: 'YYYY年MMMD日Ah点mm分',
            llll: 'YYYY年MMMD日ddddAh点mm分'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (a, b) {
            return 12 === a && (a = 0),
                '凌晨' === b || '早上' === b || '上午' === b ? a : '下午' === b || '晚上' === b ? a + 12 : a >= 11 ? a : a + 12;
        },
        meridiem: function (a, b, c) {
            var d = 100 * a + b;
            return 600 > d ? '凌晨' : 900 > d ? '早上' : 1130 > d ? '上午' : 1230 > d ? '中午' : 1800 > d ? '下午' : '晚上';
        },
        calendar: {
            sameDay: function () {
                return 0 === this.minutes() ? '[今天]Ah[点整]' : '[今天]LT';
            },
            nextDay: function () {
                return 0 === this.minutes() ? '[明天]Ah[点整]' : '[明天]LT';
            },
            lastDay: function () {
                return 0 === this.minutes() ? '[昨天]Ah[点整]' : '[昨天]LT';
            },
            nextWeek: function () {
                var a, b;
                return a = Pf().startOf('week'),
                    b = this.unix() - a.unix() >= 604800 ? '[下]' : '[本]',
                    0 === this.minutes() ? b + 'dddAh点整' : b + 'dddAh点mm';
            },
            lastWeek: function () {
                var a, b;
                return a = Pf().startOf('week'),
                    b = this.unix() < a.unix() ? '[上]' : '[本]',
                    0 === this.minutes() ? b + 'dddAh点整' : b + 'dddAh点mm';
            },
            sameElse: 'LL'
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (a, b) {
            switch (b) {
                case 'd':
                case 'D':
                case 'DDD':
                    return a + '日';
                case 'M':
                    return a + '月';
                case 'w':
                case 'W':
                    return a + '周';
                default:
                    return a;
            }
        },
        relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
        Pf);
    return Ug.locale('zh-cn'),
        Ug;
}),
    //
    !function (a) {
        'function' == typeof define && define.amd ? define(['jquery'], a) : 'object' == typeof exports ? module.exports = a : a(jQuery);
    }(function (a) {
        function b (b) {
            var g = b || window.event
                , h = i.call(arguments, 1)
                , j = 0
                , l = 0
                , m = 0
                , n = 0
                , o = 0
                , p = 0;
            if (b = a.event.fix(g),
                    b.type = 'mousewheel',
                'detail' in g && (m = -1 * g.detail),
                'wheelDelta' in g && (m = g.wheelDelta),
                'wheelDeltaY' in g && (m = g.wheelDeltaY),
                'wheelDeltaX' in g && (l = -1 * g.wheelDeltaX),
                'axis' in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m,
                    m = 0),
                    j = 0 === m ? l : m,
                'deltaY' in g && (m = -1 * g.deltaY,
                    j = m),
                'deltaX' in g && (l = g.deltaX,
                0 === m && (j = -1 * l)),
                0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, 'mousewheel-line-height');
                    j *= q,
                        m *= q,
                        l *= q;
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, 'mousewheel-page-height');
                    j *= r,
                        m *= r,
                        l *= r;
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)),
                    (!f || f > n) && (f = n,
                    d(g, n) && (f /= 40)),
                    d(g, n) && (j /= 40,
                        l /= 40,
                        m /= 40),
                        j = Math[j >= 1 ? 'floor' : 'ceil'](j / f),
                        l = Math[l >= 1 ? 'floor' : 'ceil'](l / f),
                        m = Math[m >= 1 ? 'floor' : 'ceil'](m / f),
                    k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left,
                        p = b.clientY - s.top;
                }
                return b.deltaX = l,
                    b.deltaY = m,
                    b.deltaFactor = f,
                    b.offsetX = o,
                    b.offsetY = p,
                    b.deltaMode = 0,
                    h.unshift(b, j, l, m),
                e && clearTimeout(e),
                    e = setTimeout(c, 200),
                    (a.event.dispatch || a.event.handle).apply(this, h);
            }
        }

        function c () {
            f = null;
        }

        function d (a, b) {
            return k.settings.adjustOldDeltas && 'mousewheel' === a.type && b % 120 === 0;
        }

        var e, f, g = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
            h = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;)
                a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: '3.1.12',
            setup: function () {
                if (this.addEventListener)
                    for (var c = h.length; c;)
                        this.addEventListener(h[--c], b, !1);
                else
                    this.onmousewheel = b;
                a.data(this, 'mousewheel-line-height', k.getLineHeight(this)),
                    a.data(this, 'mousewheel-page-height', k.getPageHeight(this));
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var c = h.length; c;)
                        this.removeEventListener(h[--c], b, !1);
                else
                    this.onmousewheel = null;
                a.removeData(this, 'mousewheel-line-height'),
                    a.removeData(this, 'mousewheel-page-height');
            },
            getLineHeight: function (b) {
                var c = a(b)
                    , d = c['offsetParent' in a.fn ? 'offsetParent' : 'parent']();
                return d.length || (d = a('body')),
                parseInt(d.css('fontSize'), 10) || parseInt(c.css('fontSize'), 10) || 16;
            },
            getPageHeight: function (b) {
                return a(b).height();
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        a.fn.extend({
            mousewheel: function (a) {
                return a ? this.bind('mousewheel', a) : this.trigger('mousewheel');
            },
            unmousewheel: function (a) {
                return this.unbind('mousewheel', a);
            }
        });
    }),
    //
    function (a, b, c) {
        'use strict';

        function d (c) {
            var d = new Date
                , e = 0
                , f = this;
            return f.onChange = [],
                f.validate = function () {
                    c.minTime && (c.minTime instanceof Date || (c.minTime = f.parse(c.minTime)),
                        f.isValid(c.minTime) ? (c.minTime = f.cloneTime(c.minTime),
                        d < c.minTime && (d = f.cloneTime(c.minTime))) : c.minTime = !1),
                    c.maxTime && (c.maxTime instanceof Date || (c.maxTime = f.parse(c.maxTime)),
                        f.isValid(c.maxTime) ? (c.maxTime = f.cloneTime(c.maxTime),
                        d > c.maxTime && (d = f.cloneTime(c.maxTime))) : c.maxTime = !1);
                }
                ,
                f.cloneTime = function (a) {
                    var b = new Date;
                    return b.setHours(a.getHours()),
                        b.setMinutes(a.getMinutes()),
                        b.setSeconds(a.getSeconds()),
                        b;
                }
                ,
                f.isValid = function (a) {
                    return '[object Date]' !== Object.prototype.toString.call(a) ? !1 : !isNaN(a.getTime());
                }
                ,
                f.hours12Format = function () {
                    var a = d.getHours();
                    return 0 === a ? 12 : a > 0 && 13 > a ? a : a > 12 && 23 >= a ? a - 12 : void 0;
                }
                ,
                f.to12Format = function (a) {
                    return 12 !== a || e ? e && 12 > a ? a + 12 : a : 0;
                }
                ,
                f.change = function (b) {
                    var c;
                    if (f.onChange.length)
                        for (c = 0; c < f.onChange.length; c += 1)
                            a.isFunction(f.onChange[c]) && f.onChange[c].call(f, f.get(), d, b);
                }
                ,
                f.index = function (a, b) {
                    var g, h = d.getTime();
                    if (void 0 !== b && null !== b) {
                        switch (b = parseInt(b, 10),
                            a) {
                            case 1:
                                d.setMinutes(b);
                                break;
                            case 2:
                                d.setSeconds(b);
                                break;
                            case 3:
                                g = d.getHours(),
                                    e = b,
                                    12 > g && b ? d.setHours(g + 12) : g >= 12 && !b && d.setHours(g - 12);
                                break;
                            default:
                                d.setHours(c.twelveHoursFormat ? f.to12Format(b) : b);
                        }
                        e = f.index(3),
                            f.validate(),
                        h !== d.getTime() && f.change();
                    }
                    switch (a) {
                        case 1:
                            return d.getMinutes();
                        case 2:
                            return d.getSeconds();
                        case 3:
                            return e = d.getHours() >= 12 ? 1 : 0;
                        default:
                            return c.twelveHoursFormat ? f.hours12Format() : d.getHours();
                    }
                }
                ,
                f.parse = function (a) {
                    return void 0 !== b.moment ? moment(a, c.inputFormat).toDate() : Date.parse(a);
                }
                ,
                f.set = function (a, b) {
                    var c = d.getTime()
                        , e = f.isValid(a) ? f.cloneTime(a) : f.parse(a);
                    f.isValid(e) && (d = e,
                    c !== d.getTime() && (f.validate(),
                        f.change(b)));
                }
                ,
                f.get = function () {
                    return void 0 !== b.moment ? moment(d).format(c.inputFormat) : String(d);
                }
                ,
                f.getTime = function () {
                    return d.getTime();
                }
                ,
                f;
        }

        function e (b, d, e) {
            var f = this;
            f.box = e || c.body,
                f.options = d,
                f.startinput = a(b),
                f.uniqueid = g,
                g += 1,
                f.init();
        }

        function f (d, e) {
            var f = this;
            f.uniqueid = g,
                g += 1,
                f.options = e,
                f.startinput = a(d),
                f.picker = a('<div class="periodpicker_timepicker_dialog"></div>'),
                f.startinput.TimePicker(e, f.picker),
                f.options.inline ? (f.picker.addClass('periodpicker_timepicker_inline'),
                    f.startinput.after(f.picker).hide(),
                    f.startinput.TimePicker('regenerate')) : (a(c.body).append(f.picker),
                    f.startinput.on('focus.xdsoft' + f.uniqueid, function () {
                        f.show();
                    }),
                    a(b).on('mousedown.xdsoft' + f.uniqueid, function () {
                        f.hide();
                    }));
        }

        var g = 1;
        e.prototype.getRealOffset = function (a) {
            var b = this.getIndex(a);
            return -1 !== this.indexes[a].indexOf(b) ? this.indexes[a].indexOf(b) * this.itemHeight() : 0;
        }
            ,
            e.prototype.getIndex = function (a) {
                return Math.floor(this.currentime.index(a) / this.options.steps[a]) * this.options.steps[a];
            }
            ,
            e.prototype.height = function () {
                return this.timepicker ? parseInt(this.timepicker.get(0).offsetHeight, 10) : 0;
            }
            ,
            e.prototype.itemHeight = function () {
                return this.items[0][0] ? parseInt(this.items[0][0].get(0).offsetHeight, 10) : 22;
            }
            ,
            e.prototype.highlight = function () {
                var a, b;
                for (void 0 === this.last && (this.last = []),
                         a = 0; a < this.boxes.length; a += 1)
                    b = this.getIndex(a),
                    void 0 !== this.items[a][this.indexes[a].indexOf(b)] && this.items[a][this.indexes[a].indexOf(b)].addClass('active'),
                    void 0 !== this.last[a] && this.last[a] !== this.indexes[a].indexOf(b) && void 0 !== this.items[a][this.last[a]] && this.items[a][this.last[a]].removeClass('active'),
                        this.last[a] = this.indexes[a].indexOf(b);
            }
            ,
            e.prototype.setTime = function (a) {
                var b, c;
                if (void 0 !== a && a && a.length)
                    for (c = this.boxes.length - 1; c >= 0; c -= 1)
                        this.currentime.index(c, a[c]);
                for (c = 0; c < this.boxes.length; c += 1)
                    void 0 !== this.boxes[c] && (b = -this.getRealOffset(c) + Math.ceil(this.height() - this.itemHeight()) / 2,
                        this.boxes[c].css('margin-top', b + 'px'));
                this.highlight();
            }
            ,
            e.prototype.xy = function (a) {
                var b, c = {
                    x: 0,
                    y: 0
                };
                return 'touchstart' === a.type || 'touchmove' === a.type || 'touchend' === a.type || 'touchcancel' === a.type ? (b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
                    c.x = b.clientX,
                    c.y = b.clientY) : ('mousedown' === a.type || 'mouseup' === a.type || 'mousemove' === a.type || 'mouseover' === a.type || 'mouseout' === a.type || 'mouseenter' === a.type || 'mouseleave' === a.type) && (c.x = a.clientX,
                    c.y = a.clientY),
                    c;
            }
            ,
            e.prototype.init = function () {
                var c, e, f, g = this;
                g.timepicker = a('<div class="periodpicker_timepicker xdsoft_noselect"><div class="periodpicker_timepicker_sliders">' + (g.options.hours ? '<div data-index="0" class="periodpicker_hourspicker_box"><div class="periodpicker_hourspicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : '') + (g.options.minutes ? '<div data-index="1" class="periodpicker_minutespicker_box"><div class="periodpicker_minutespicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : '') + (g.options.seconds ? '<div data-index="2" class="periodpicker_secondspicker_box"><div class="periodpicker_secondspicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : '') + (g.options.ampm ? '<div data-index="3" class="periodpicker_ampmpicker_box"><div class="periodpicker_ampmpicker"><div data-value="0" class="periodpicker_0 periodpicker_item">AM</div><div data-value="1" class="periodpicker_1 periodpicker_item">PM</div></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : '') + '</div><div class="periodpicker_timepicker_center"></div></div>'),
                    g.currentime = new d(g.options),
                    g.startinput.length && g.startinput.val() ? g.currentime.set(g.startinput.val()) : (g.startinput.val(g.options.defaultTime),
                        g.currentime.set(g.options.defaultTime)),
                g.options.onChange && g.currentime.onChange.push(g.options.onChange),
                g.options.saveOnChange && g.currentime.onChange.push(function (a, b, c) {
                    var d = g.startinput.val();
                    g.startinput.val(a),
                    a === d || c || g.startinput.trigger('change');
                }),
                    g.boxes = {},
                    f = 0,
                    g.timepicker.find('.periodpicker_timepicker_sliders>div>div').each(function () {
                        f = Math.max(f, parseInt(a(this).parent().data('index'), 10)),
                            g.boxes[parseInt(a(this).parent().data('index'), 10)] = a(this);
                    }),
                    g.boxes.length = f + 1,
                    g.timepicker.find('.periodpicker_timepicker_sliders>div').addClass('periodpicker_col' + g.timepicker.find('.periodpicker_timepicker_sliders>div>div').length),
                    g.timer2 = 0,
                    g.timepicker.on('mousewheel', function (a) {
                        g.options.mouseWheel && (a.preventDefault(),
                            a.stopPropagation());
                    }),
                    g.timepicker.find('.periodpicker_timepicker_sliders>div').on('mousewheel', function (b) {
                        if (g.options.mouseWheel) {
                            var c = a(this)
                                , d = [null, null, null, null]
                                , e = parseInt(a(this).data('index'), 10);
                            c.addClass('draggable'),
                                3 > e ? d[e] = g.currentime.index(e) + -b.deltaY * (g.options.inverseMouseWheel ? -1 : 1) * g.options.steps[e] : d[e] = g.currentime.index(e) - 1,
                                g.setTime(d),
                                clearTimeout(g.timer2),
                                g.timer2 = setTimeout(function () {
                                    c.removeClass('draggable');
                                }, 300),
                                b.preventDefault(),
                                b.stopPropagation();
                        }
                    }),
                    g.timepicker.find('.periodpicker_timepicker_sliders').on('click', '.periodpicker_item', function () {
                        if (g.options.clickAndSelect) {
                            var b = parseInt(a(this).data('value'), 10)
                                , c = [null, null, null, null]
                                , d = parseInt(a(this).parent().parent().data('index'), 10);
                            g.iwasdragged || isNaN(b) || (c[d] = b,
                                g.setTime(c));
                        }
                    }),
                    g.timer = 0,
                    g.timepicker.find('.periodpicker_timepicker_sliders>div input.periodpicker_key_hooker').on('keydown', function (b) {
                        if (g.options.listenKeyPress) {
                            var c = [null, null, null, null]
                                , d = a(this)
                                , e = parseInt(d.parent().data('index'), 10)
                                , f = !1;
                            switch (b.keyCode) {
                                case 38:
                                    c[e] = g.currentime.index(e) - g.options.steps[e],
                                        g.setTime(c),
                                        f = !0;
                                    break;
                                case 39:
                                    a(this).parent().next().length && a(this).parent().next().find('input.periodpicker_key_hooker').eq(0).focus(),
                                        f = !0;
                                    break;
                                case 37:
                                    a(this).parent().prev().length && a(this).parent().prev().find('input.periodpicker_key_hooker').eq(0).focus(),
                                        f = !0;
                                    break;
                                case 40:
                                    c[e] = g.currentime.index(e) + g.options.steps[e],
                                        g.setTime(c),
                                        f = !0;
                                    break;
                                default:
                                    /[0-9amp]/i.test(String.fromCharCode(b.keyCode)) && (d.val(d.val() + String.fromCharCode(b.keyCode)),
                                        f = !0),
                                        clearTimeout(g.timer),
                                        g.timer = setTimeout(function () {
                                            var a = d.val();
                                            d.val(''),
                                            3 === e && a.length && (a = 'p' === a.toLowerCase().substr(0, 1) ? 1 : 0),
                                                a = parseInt(a, 10),
                                            isNaN(a) || (c[e] = a,
                                                g.setTime(c));
                                        }, 300);
                            }
                            f && (b.preventDefault(),
                                b.stopImmediatePropagation());
                        }
                    }),
                    g.timepicker.find('.periodpicker_timepicker_sliders>div').on('mousedown.xdsoft touchstart.xdsoft', function (b) {
                        g.options.dragAndDrop && (g.drag = !0,
                            c = [g.xy(b).x, g.xy(b).y],
                            c[4] = parseInt(a(this).data('index'), 10),
                            c[3] = g.boxes[c[4]],
                            c[2] = parseInt(c[3].css('margin-top'), 10),
                            c[3].find('div').removeClass('active'),
                            c[3].parent().addClass('draggable'),
                            g.iwasdragged = !1,
                            b.preventDefault(),
                            b.stopImmediatePropagation()),
                            a(this).find('input.periodpicker_key_hooker').focus();
                    }),
                    g.iwasdragged = !1,
                    a(b).on('mouseup.xdsoft' + g.uniqueid + ' touchend.xdsoft' + g.uniqueid, function (a) {
                        g.options.dragAndDrop && g.drag && (g.drag = !1,
                            g.setTime(),
                            c[3].parent().removeClass('draggable'),
                            a.stopImmediatePropagation());
                    }).on('mousemove.xdsoft' + g.uniqueid + ' touchmove.xdsoft' + g.uniqueid, function (a) {
                        if (g.drag && g.options.dragAndDrop) {
                            e = [g.xy(a).x - c[0], g.xy(a).y - c[1]],
                                c[3].css({
                                    marginTop: c[2] + e[1]
                                }),
                            e[1] > 10 && (g.iwasdragged = !0);
                            var b = -Math.round((-(g.height() - g.itemHeight()) / 2 + c[2] + e[1]) / g.itemHeight());
                            0 > b && (b = 0),
                            b >= g.items[c[4]].length && (b = g.items[c[4]].length - 1),
                                b = parseInt(g.items[c[4]][b].data('value'), 10),
                                g.currentime.index(c[4], b),
                                g.highlight(),
                                a.preventDefault();
                        }
                    }),
                    a(g.box).append(g.timepicker),
                    g.generateTimepicker(),
                    g.setTime();
            }
            ,
            e.prototype.destroy = function () {
                var c = this;
                a(b).off('mouseup.xdsoft' + c.uniqueid + ' touchend.xdsoft' + c.uniqueid).off('mousemove.xdsoft' + c.uniqueid + ' touchmove.xdsoft' + c.uniqueid),
                    c.timepicker.remove(),
                    delete c.timepicker,
                    delete c.boxes,
                    delete c.currentime;
            }
            ,
            e.prototype.generateTimepicker = function () {
                var b, c, d = this;
                for (d.items = [[], [], [], []],
                         d.indexes = [[], [], [], [0, 1]],
                         b = 0; 2 >= b; b += 1)
                    if (void 0 !== d.options.parts[b] && void 0 !== d.boxes[b]) {
                        if (!d.options.twelveHoursFormat || b > 0)
                            for (c = d.options.parts[b][0][0]; c <= d.options.parts[b][0][1]; c += d.options.steps[b])
                                d.items[b].push(a('<div data-value="' + c + '" class="periodpicker_' + c + ' periodpicker_item">' + (10 > c ? '0' : '') + c + '</div>')),
                                    d.indexes[b].push(c);
                        else
                            for (d.items[b].push(a('<div data-value="12" class="periodpicker_12 periodpicker_item">12</div>')),
                                     d.indexes[b].push(12),
                                     c = 1; 11 >= c; c += d.options.steps[b])
                                d.items[b].push(a('<div data-value="' + c + '" class="periodpicker_' + c + ' periodpicker_item">' + (10 > c ? '0' : '') + c + '</div>')),
                                    d.indexes[b].push(c);
                        d.boxes[b].html(d.items[b]);
                    }
                d.boxes[3] && d.boxes[3].length && d.boxes[b].find('div').each(function () {
                    d.items[3].push(a(this));
                });
            }
            ,
            a.fn.TimePicker = function (b, c, d) {
                var f, g = this;
                return this.each(function () {
                    var h, i = a(this), j = i.data('timepicker');
                    if (j || 'string' != typeof b)
                        if (j)
                            switch (b) {
                                case 'stopDrag':
                                    j.drag = !1,
                                        j.timepicker.find('.draggable').removeClass('draggable'),
                                        j.setTime();
                                    break;
                                case 'regenerate':
                                    j.setTime();
                                    break;
                                case 'destroy':
                                    j.destroy();
                                    break;
                                case 'save':
                                    i.val(j.currentime.get());
                                    break;
                                case 'setValue':
                                    j.currentime.set(c, d),
                                        j.setTime();
                                    break;
                                case 'setMin':
                                case 'setMax':
                                    f = j.currentime.getTime(),
                                        j.options['setMin' === b ? 'minTime' : 'maxTime'] = c,
                                        j.currentime.validate(),
                                        j.setTime(),
                                    f !== j.currentime.getTime() && j.currentime.change();
                                    break;
                                case 'getValue':
                                    g = j.currentime.get();
                            }
                        else
                            h = a.extend(!0, {}, a.fn.TimePicker.defaultOptions, b),
                                j = new e(this, h, c),
                                i.data('timepicker', j);
                }),
                    g;
            }
            ,
            a.fn.timepicker = a.fn.TimePicker,
            a.fn.TimePicker.defaultOptions = {
                clickAndSelect: !0,
                dragAndDrop: !0,
                mouseWheel: !0,
                inverseMouseWheel: !1,
                listenKeyPress: !0,
                saveOnChange: !0,
                onChange: function () {
                    return !0;
                },
                twelveHoursFormat: !0,
                inputFormat: 'HH:mm:ss',
                defaultTime: '00:00:00',
                minTime: !1,
                maxTime: !1,
                hours: !0,
                minutes: !0,
                seconds: !1,
                ampm: !0,
                parts: [[[0, 23]], [[0, 59]], [[0, 59]], [[0, 1]]],
                steps: [1, 1, 1, 1]
            },
            f.prototype.destroy = function () {
                this.startinput.TimePicker('destroy'),
                    this.picker.remove();
            }
            ,
            f.prototype.hide = function () {
                if (this.picker.hasClass('visible')) {
                    var b = !0;
                    this.options.onHide && a.isFunction(this.options.onHide) && (b = !(this.options.onHide.call(this, this.startinput) === !1)),
                    b && this.picker.removeClass('visible');
                }
            }
            ,
            f.prototype.show = function () {
                if (!this.picker.hasClass('visible')) {
                    var c, d, e = this.startinput.offset();
                    c = e.top + this.startinput.outerHeight() - 1,
                        d = e.left,
                    c + this.picker.outerHeight() > a(b).height() + a(b).scrollTop() && (c = e.top - this.picker.outerHeight() - 1),
                    0 > c && (c = 0),
                    d + this.picker.outerWidth() > a(b).width() && (d = a(b).width() - this.picker.outerWidth()),
                        this.picker.css({
                            left: d,
                            top: c
                        }),
                        this.picker.addClass('visible'),
                        this.startinput.TimePicker('regenerate');
                }
            }
            ,
            a.fn.TimePickerAlone = function (b, c, d) {
                var e = this;
                return this.each(function () {
                    var e, g = a(this), h = g.data('timepickeralone');
                    if (h)
                        switch (b) {
                            case 'destroy':
                                h.destroy();
                                break;
                            default:
                                return h.startinput.TimePicker(b, c, d);
                        }
                    else
                        e = a.extend(!0, {}, a.fn.TimePicker.defaultOptions, a.fn.TimePickerAlone.defaultOptions, b),
                            h = new f(this, e),
                            g.data('timepickeralone', h);
                }),
                    e;
            }
            ,
            a.fn.timepickeralone = a.fn.TimePickerAlone,
            a.fn.TimePickerAlone.defaultOptions = {
                inline: !1,
                onHide: function () {
                    return !0;
                }
            };
    }(jQuery, window, document),
    //
    function (a, b, c) {
        'use strict';

        function d (b, c, e) {
            var f, g = e || new Date;
            return g.isTW = !0,
                g.weekdays = function (a) {
                    var b, c, d = moment.weekdaysShort();
                    for (b = d.splice(1),
                             b[6] = d[0],
                             d = b,
                             b = d.splice(a - 1),
                             c = 0; a - 1 > c; c += 1)
                        b.push(d[c]);
                    return b;
                }
                ,
                g.clone = function (a, b, c, e, f, h) {
                    var i = new d(!1, !1, new Date(g.getTime()));
                    return e && i.setHours(e),
                    f && i.setMinutes(f),
                    h && i.setSeconds(h),
                    a && i.setFullYear(a),
                    b && i.setMonth(b),
                    c && i.setDate(c),
                        i;
                }
                ,
                g.inRange = function (a, b) {
                    return moment(a).isBetween(b[0], b[1], 'day') || moment(a).isSame(b[0], 'day') || moment(a).isSame(b[1], 'day');
                }
                ,
                g.isValid = function () {
                    return '[object Date]' !== Object.prototype.toString.call(g) ? !1 : !isNaN(g.getTime());
                }
                ,
                g.parseStr = function (b, c) {
                    var e;
                    return e = 'string' == typeof b ? moment(b, c) : 'date' === a.type(b) ? new d(0, 0, new Date(b.getTime())) : b,
                        e && e.isValid() ? g = e.isTW ? e : new d(0, 0, e.toDate()) : null;
                }
                ,
                g.isEqualDate = function (a, b) {
                    return a && a.isValid() && b && b.isValid() ? a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getMonth() === b.getMonth() : !1;
                }
                ,
                g.format = function (a) {
                    return f = moment(g).format(a),
                        new RegExp('^[0-9]+$').test(f) ? parseInt(f, 10) : f;
                }
                ,
                g.countDaysInMonth = function () {
                    return new Date(g.getFullYear(), g.getMonth() + 1, 0).getDate();
                }
                ,
            b && c && g.parseStr(b, c),
                g;
        }

        function e (b, c) {
            var e, f = this, h = [];
            f.options = c,
                f.picker = a('<div unselectable="on" class="period_picker_box xdsoft_noselect" style=""><div class="period_picker_resizer"></div><div class="period_picker_head"><span class="period_picker_head_title"></span><span class="period_picker_max_min" title="' + this.i18n('Open fullscreen') + '"></span><span class="period_picker_close" title="' + this.i18n('Close') + '"></span></div><div class="period_picker_years"><div class="period_picker_years_inner"><div class="period_picker_years_selector"><div class="period_picker_years_selector_container" style="width: 5960px; left: 0px;"></div></div></div></div><div class="period_picker_work"><a href="" class="xdsoft_navigate xdsoft_navigate_prev"></a><div class="period_picker_timepicker_box"><input data-index="0" class="timepicker" type="hidden"></div><div class="period_picker_days"><table><tbody></tbody></table></div><div class="period_picker_timepicker_box"><input  data-index="1"  class="timepicker" type="hidden"></div><a href="" class="xdsoft_navigate xdsoft_navigate_next"></a></div><div class="period_picker_submit_shadow"></div><div class="period_picker_submit_dates"><span class="period_picker_from_time_block period_picker_time"><span class="input_box"><input data-index="0"  class="input_control period_picker_from_time"></span></span><span class="period_picker_from_block period_picker_date"><span class="input_box"><input class="input_control period_picker_from" maxlength="10"></span></span><span class="period_picker_date_separator">&#8212;</span><span class="period_picker_to_block period_picker_date"><span class="input_box"><input class="input_control period_picker_to" maxlength="10"></span></span><span class="period_picker_to_time_block period_picker_time"><span class="input_box"><input data-index="1" class="input_control period_picker_to_time"></span></span><button class="period_picker_show period_picker_ok" role="button" type="button"><span class="button_text">' + this.i18n('OK') + '</span></button><button class="period_picker_show period_picker_today" role="button" type="button"><span class="button_text">' + this.i18n('Today') + '</span></button><button class="period_picker_show period_picker_clear" role="button" type="button"><span class="button_text">' + this.i18n('Clear') + '</span></button></div></div>'),
                f.pickerdays = f.picker.find('.period_picker_days'),
                f.calendarbox = f.pickerdays.find('> table > tbody'),
                f.yearsline = f.picker.find('.period_picker_years_selector_container'),
                f.yearslineparent = f.picker.find('.period_picker_years_selector'),
                f.timepicker = f.picker.find('.period_picker_timepicker_box'),
                f.button = a('<div class="period_picker_input ' + c.buttonClassSuffix + '" type="button"><span class="period_button_text"><span class="period_button_content_wrapper"><span class="period_button_content"><span class="icon_calendar"></span><span class="period_button_content_body">' + this.i18n(c.norange ? 'Choose date' : 'Choose period') + '</span><span class="icon_clear"></span></span></span></span></div>'),
                f.startinput = a(c.start ? c.start : b),
                f.endinput = a(c.end),
                f.startinput.attr('autocomplete', 'off'),
                f.endinput.attr('autocomplete', 'off'),
                f.periodtime = [[]],
                f.period = [],
                f.director = 0,
                e = new d,
                h[0] = f.startinput.val(),
                h[1] = f.endinput.val(),
                f.addRange([e.parseStr(h[0], c.timepicker ? c.formatDateTime : c.formatDate) || e.parseStr(h[0], c.formatDate), e.parseStr(h[1], c.timepicker ? c.formatDateTime : c.formatDate) || e.parseStr(h[1], c.formatDate)]),
                f.onAfterShow = [],
                f.onAfterHide = [],
                f.onAfterRegenerate = [],
                f.uniqueid = g,
                f.currentTimepickerIndex = 0,
                f.timepickerSetLimits = !1,
                f.timer1 = 0,
                f.timer2 = 0,
                f.timer3 = 0,
                g += 1,
                f.applyOptions(),
                f.init(),
            c.timepicker && void 0 !== a.fn.TimePicker && f.addRangeTime(e.parseStr(h[0], c.formatDateTime) || e.parseStr(h[0], c.formatDate), e.parseStr(h[1], c.formatDateTime) || e.parseStr(h[1], c.formatDate));
        }

        var f, g = 0, h = function (a, b) {
            (b || void 0 === b) && a.is(':hidden') ? a.each(function () {
                this.style.display = '';
            }) : b || a.hide();
        };
        e.prototype.applyOptions = function () {
            var b, c = this.options, e = this;
            e.picker.toggleClass('period_picker_maximize', c.fullsize),
                h(e.picker.find('.period_picker_resizer'), c.resizeButton),
                h(e.picker.find('.period_picker_head_title').html(e.i18n(c.norange ? 'Select date' : 'Select period')), c.title),
                h(e.picker.find('.period_picker_max_min'), c.fullsizeButton),
                h(e.picker.find('.period_picker_close'), c.closeButton && !c.inline),
                h(e.picker.find('.period_picker_years'), c.yearsLine),
                h(e.picker.find('.xdsoft_navigate'), c.navigate),
                h(e.picker.find('.period_picker_timepicker_box').eq(0), c.timepicker && void 0 !== a.fn.TimePicker),
                h(e.picker.find('.period_picker_timepicker_box').eq(1), c.timepicker && void 0 !== a.fn.TimePicker && !c.norange),
                e.picker.find('.period_picker_date,.period_picker_date_separator').css('visibility', c.showDatepickerInputs ? '' : 'hidden'),
                h(e.picker.find('.period_picker_from_time_block'), c.timepicker && void 0 !== a.fn.TimePicker),
                e.picker.find('.period_picker_from_time_block').css('visibility', c.showTimepickerInputs ? '' : 'hidden'),
                h(e.picker.find('.period_picker_to_time_block'), c.timepicker && void 0 !== a.fn.TimePicker && !e.options.norange),
                e.picker.find('.period_picker_to_time_block').css('visibility', c.showTimepickerInputs ? '' : 'hidden'),
                h(e.picker.find('.period_picker_ok'), c.okButton && !c.inline),
                h(e.picker.find('.period_picker_today'), c.todayButton),
                h(e.picker.find('.period_picker_clear'), c.clearButton),
                h(e.button.find('.period_button_content .icon_clear'), c.clearButtonInButton),
            c.tabIndex !== !1 && e.button.attr('tabindex', c.tabIndex),
            !c.withoutBottomPanel && (c.todayButton || c.clearButton || c.okButton && !c.inline || c.showDatepickerInputs || c.showTimepickerInputs && c.timepicker && void 0 !== a.fn.TimePicker) || (e.picker.addClass('without_bottom_panel'),
                c.withoutBottomPanel = !0,
                c.someYOffset = 0),
            c.yearsLine || e.picker.addClass('without_yearsline'),
            c.title || c.fullsizeButton || c.closeButton && !c.inline || e.picker.addClass('without_header'),
            c.timepicker && void 0 !== a.fn.TimePicker && e.picker.addClass('with_first_timepicker'),
            c.timepicker && void 0 !== a.fn.TimePicker && !c.norange && e.picker.addClass('with_second_timepicker'),
            c.animation && e.picker.addClass('animation'),
            c.norange && e.picker.addClass('xdsoft_norange'),
            c.inline && e.picker.addClass('xdsoft_inline'),
                b = function (b) {
                    var d, f = !1;
                    if (void 0 !== c[b] && a.isFunction(c[b])) {
                        for (d = 0; d < e[b].length; d += 1)
                            if (c[b] === e[b][d]) {
                                f = !0;
                                break;
                            }
                        f || e[b].push(c[b]);
                    }
                }
                ,
                b('onAfterShow'),
                b('onAfterHide'),
                b('onAfterRegenerate'),
                e.maxdate = c.maxDate ? new d(c.maxDate, c.formatDate) : !1,
                e.mindate = c.minDate ? new d(c.minDate, c.formatDate) : !1,
                e.monthcount = c.cells[0] * c.cells[1],
                e.picker.css({
                    width: c.cells[1] * c.monthWidthInPixels + (c.timepicker && a.fn.TimePicker ? 87 * (c.norange ? 1 : 2) : 0) + 50,
                    height: c.cells[0] * c.monthHeightInPixels + c.someYOffset
                });
        }
            ,
            e.prototype.returnPeriod = function () {
                this.picker.find('input.period_picker_from').val(void 0 !== this.period ? this.period : ''),
                    this.picker.find('input.period_picker_to').val(void 0 !== this.period[1] ? this.period[1] : this.picker.find('input.period_picker_from').val());
            }
            ,
            e.prototype.moveTimeToDate = function () {
                this.options.timepicker && this.periodtime.length && this.periodtime[0].length && (null !== this.period[0] && this.period[0].format && this.periodtime[0][0].format && (this.period[0].setSeconds(this.periodtime[0][0].getSeconds()),
                    this.period[0].setMinutes(this.periodtime[0][0].getMinutes()),
                    this.period[0].setHours(this.periodtime[0][0].getHours())),
                null !== this.periodtime[0][1] && null !== this.period[1] && this.period[1].format && this.periodtime[0][1].format && (this.period[1].setSeconds(this.periodtime[0][1].getSeconds()),
                    this.period[1].setMinutes(this.periodtime[0][1].getMinutes()),
                    this.period[1].setHours(this.periodtime[0][1].getHours())));
            }
            ,
            e.prototype.syncTimesInputs = function () {
                if (this.options.timepicker && void 0 !== a.fn.TimePicker) {
                    var b = new d
                        , c = this.timepicker.find('input.timepicker')
                        , e = this.picker.find('.period_picker_submit_dates .period_picker_time input');
                    this.periodtime[0][0] && (a.fn.TimePicker && c.eq(0).TimePicker('setValue', this.periodtime[0][0], !0),
                    e.eq(0).is(':focus') || e.eq(0).val(this.periodtime[0][0].format(this.options.timepickerOptions.inputFormat))),
                    !this.options.norange && this.periodtime[0][1] && (a.fn.TimePicker && c.eq(1).TimePicker('setValue', this.periodtime[0][1], !0),
                    e.eq(1).is(':focus') || e.eq(1).val(this.periodtime[0][1].format(this.options.timepickerOptions.inputFormat))),
                    !this.options.norange && this.options.useTimepickerLimits && b.isEqualDate(this.period[0], this.period[1]) && (0 === this.currentTimepickerIndex ? c.eq(1).TimePicker('setMin', c.eq(0).val()).TimePicker('setMin', !1) : c.eq(0).TimePicker('setMax', c.eq(1).val()).TimePicker('setMax', !1));
                }
            }
            ,
            e.prototype.getInputsValue = function () {
                var a, b = [];
                return this.syncTimesInputs(),
                this.startinput.length && this.period && this.period.length && (this.moveTimeToDate(),
                    a = this.options.timepicker ? this.options.formatDateTime : this.options.formatDate,
                this.period[0] && this.period[0].format && b.push(this.period[0].format(a)),
                this.period[1] && this.period[1].format && b.push(this.period[1].format(a))),
                    b;
            }
            ,
            e.prototype.__safecall = function (b) {
                return this.options[b] && a.isFunction(this.options[b]) && this.options[b].call(this) === !1 ? !1 : void 0;
            }
            ,
            e.prototype.setInputsValue = function () {
                var a = this.getInputsValue();
                a.length ? (a[0] && this.startinput.val() !== a[0] && this.startinput.val(a[0]),
                a[1] && this.endinput.val() !== a[1] && this.endinput.val(a[1])) : (this.startinput.val(''),
                    this.endinput.val('')),
                this.oldStringRange !== a.join('-') && (this.oldStringRange = a.join('-'),
                    this.startinput.trigger('change'),
                    this.endinput.trigger('change'),
                a[0] && (this.__safecall('onChange'),
                a[1] && a[0] !== a[1] && this.__safecall('onChangePeriod')));
            }
            ,
            e.prototype.getLabel = function () {
                var a, b = [];
                return this.period.length && (this.moveTimeToDate(),
                    a = this.options.timepicker ? [this.options.formatDecoreDateTimeWithYear || this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDecoreDateTimeWithoutMonth || this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDateTime] : [this.options.formatDecoreDateWithYear || this.options.formatDecoreDate || this.options.formatDate, this.options.formatDecoreDateWithoutMonth || this.options.formatDecoreDate || this.options.formatDate, this.options.formatDecoreDate || this.options.formatDate, this.options.formatDate],
                    void 0 !== this.period[1] && this.period[1] && void 0 !== this.period[1].format && this.period[1].format && this.period[0].format(a[3]) !== this.period[1].format(a[3]) ? (b.push(this.period[0].format(this.period[0].format('YYYY') !== this.period[1].format('YYYY') ? a[0] : this.period[0].format('M') !== this.period[1].format('M') ? a[2] : a[1])),
                        b.push(this.period[1].format(a[0]))) : b.push(this.period[0].format(a[0]))),
                    b;
            }
            ,
            e.prototype.setLabel = function () {
                var a = this.getLabel()
                    , b = this.button;
                a.length ? (1 === a.length ? b.find('.period_button_content_body').html(a[0]) : b.find('.period_button_content_body').html('<span>' + a[0] + '</span><span class="period_button_dash">&#8212;</span><span>' + a[1] + '</span>'),
                this.options.clearButtonInButton && h(b.find('.period_button_content .icon_clear'), !0)) : (b.find('.period_button_content_body').html(this.i18n(this.options.norange ? 'Choose date' : 'Choose period')),
                this.options.clearButtonInButton && setTimeout(function () {
                    h(b.find('.period_button_content .icon_clear'), !1);
                }, 200));
            }
            ,
            e.prototype.highlightPeriod = function () {
                var b = this
                    , c = new d;
                moment.locale(b.options.lang),
                b.picker.is(':hidden') || (b.picker.find('.period_picker_cell.period_picker_selected').removeClass('period_picker_selected'),
                    b.period.length ? (b.picker.find('.period_picker_cell').each(function () {
                        var d = c.parseStr(a(this).data('date'), b.options.formatDate);
                        c.inRange(d, b.period) && a(this).addClass('period_picker_selected');
                    }),
                        b.picker.find('.period_picker_years_period').css({
                            width: Math.floor(b.options.yearSizeInPixels / 365 * Math.abs(moment(b.period[1]).diff(b.period[0], 'day'))) + 'px',
                            left: Math.floor(b.options.yearSizeInPixels / 365 * -moment([b.options.yearsPeriod[0], 1, 1]).diff(b.period[0], 'day'))
                        }),
                        b.picker.find('input.period_picker_from:not(:focus)').val(void 0 !== b.period[0] && b.period[0] ? b.period[0].format(b.options.formatDate) : ''),
                        b.picker.find('input.period_picker_to:not(:focus)').val(void 0 !== b.period[1] && b.period[1] ? b.period[1].format(b.options.formatDate) : b.picker.find('input.period_picker_from').val()),
                        b.picker.find('input.period_picker_from:not(:focus),input.period_picker_to:not(:focus)').trigger('change')) : b.picker.find('input.period_picker_from:not(:focus),input.period_picker_to:not(:focus)').val('')),
                    b.setLabel(),
                    b.setInputsValue();
            }
            ,
            e.prototype.addRangeTime = function (a, b) {
                var c = new d;
                this.periodtime[0][0] = c.parseStr(a, this.options.timepickerOptions.inputFormat),
                    this.options.norange ? this.periodtime[0][1] = this.periodtime[0][0] : (this.periodtime[0][1] = c.parseStr(b, this.options.timepickerOptions.inputFormat),
                    null === this.periodtime[0][0] && this.periodtime[0][1] && (this.periodtime[0][0] = this.periodtime[0][1])),
                null === this.periodtime[0][0] && (this.periodtime[0] = []),
                    this.setLabel(),
                    this.setInputsValue();
            }
            ,
            e.prototype.addRange = function (b) {
                this.oldStringRange = this.getInputsValue().join('-'),
                    this.currentTimepickerIndex = 0;
                var c, e = new d;
                if (this.options.norange && (this.director = 0),
                        a.isArray(b))
                    this.period = [e.parseStr(b[0], this.options.formatDate), e.parseStr(b[1], this.options.formatDate)],
                    null === this.period[0] && (this.period = []),
                        this.director = 0;
                else {
                    if (void 0 === this.period && (this.period = []),
                            this.period[this.options.norange ? 0 : this.director] = e.parseStr(b, this.options.formatDate),
                        null === this.period[this.director])
                        return this.period = [],
                            void this.highlightPeriod();
                    this.director || (this.period[1] = this.period[this.director].clone()),
                    this.period[0] > this.period[1] && (c = this.period[0],
                        this.period[0] = this.period[1],
                        this.period[1] = c),
                        this.director = this.director ? 0 : 1;
                }
                this.options.norange && this.period[0] && this.period[1] && this.period[1] !== this.period[0] && (this.period[1] = this.period[0].clone()),
                    this.highlightPeriod(),
                this.options.hideAfterSelect && this.period[0] && this.period[1] && this.period[0] !== this.period[1] && this.hide(),
                    this.month = this.period.length ? this.period[0].getMonth() + 1 : this.options.startMonth,
                    this.year = this.period.length ? this.period[0].getFullYear() : this.options.startYear;
            }
            ,
            e.prototype.recalcDraggerPosition = function () {
                var a = this;
                clearTimeout(this.timer2),
                    this.timer2 = setTimeout(function () {
                        var b = Math.abs(parseInt(a.yearsline.css('left'), 10))
                            , c = a.picker.find('.period_picker_years_dragger')
                            , d = parseInt(c.css('left'), 10);
                        b > d ? a.yearsline.css('left', -d + 'px') : d + c.width() > b + a.yearslineparent.width() && a.yearsline.css('left', -(d + c.width() - a.yearslineparent.width()) + 'px');
                    }, 100);
            }
            ,
            e.prototype.calcDate = function (a, b, c, d) {
                a.setFullYear(b),
                    a.setMonth(c),
                    a.setDate(d);
            }
            ,
            e.prototype.getRealDateTime = function () {
                var a = new Date;
                return this.calcDate(a, this.year, this.month - 1, 1),
                    [a.getMonth(), a.getFullYear()];
            }
            ,
            e.prototype.regenerate = function (b) {
                if (this.picker.is(':visible')) {
                    var c, d = this, e = parseInt(d.pickerdays.width(), 10), f = parseInt(d.picker[0].offsetHeight, 10);
                    for (moment.locale(d.options.lang),
                             void 0 === b ? this.options.cells = [Math.floor((f - d.options.someYOffset) / d.options.monthHeightInPixels) || 1, Math.floor(e / d.options.monthWidthInPixels) || 1] : (this.options.cells = b,
                                 d.picker.css({
                                     width: this.options.cells[1] * d.options.monthWidthInPixels + (d.options.timepicker && a.fn.TimePicker ? 87 * (d.options.norange ? 1 : 2) : 0) + 50,
                                     height: this.options.cells[0] * d.options.monthHeightInPixels + d.options.someYOffset
                                 })),
                         this.options.cells[0] < 0 && (this.options.cells[0] = 1),
                             d.monthcount = this.options.cells[0] * this.options.cells[1],
                             d.generateCalendars(d.month, d.year),
                             d.generateYearsLine(),
                             d.recalcDraggerPosition(),
                             d.highlightPeriod(),
                             c = 0; c < this.onAfterRegenerate.length; c += 1)
                        this.onAfterRegenerate[c].call(this);
                }
            }
            ,
            e.prototype.init = function () {
                var e, g, h, i, j, k, l, m, n, o, p, q, r = this;
                r.button.on('click keydown', function (a) {
                    if ('keydown' === a.type)
                        switch (a.which) {
                            case 9:
                                return void (r.options.inline || r.hide());
                            case 38:
                            case 13:
                                break;
                            default:
                                return;
                        }
                    return r.button.is('[disabled]') ? (a.preventDefault(),
                        !1) : void r.toggle();
                }),
                r.options.inline || r.startinput.after(r.button),
                    e = r.startinput.offset(),
                    r.picker.find('.period_picker_submit_dates input').on('focus', function () {
                        a(this).parent().parent().addClass('input_focused_yes');
                    }).on('blur', function () {
                        a(this).parent().parent().removeClass('input_focused_yes');
                    }),
                    r.picker.find('.period_picker_submit_dates .period_picker_date input').on('keydown', function () {
                        var b = this;
                        clearTimeout(r.timer3),
                            r.timer3 = setTimeout(function () {
                                if (a(b).val()) {
                                    var c = moment(a(b).val(), r.options.formatDate);
                                    if (!c.isValid())
                                        return void a(b).parent().parent().addClass('period_picker_error');
                                    r.addRange([r.picker.find('.period_picker_submit_dates .period_picker_date input').eq(0).val(), r.picker.find('.period_picker_submit_dates .period_picker_date input').eq(1).val()]);
                                }
                                a(b).parent().parent().removeClass('period_picker_error');
                            }, 200);
                    }),
                r.options.timepicker && a.fn.TimePicker && (q = function () {
                    var b, c = this, e = new d;
                    if (r.currentTimepickerIndex = parseInt(a(this).data('index'), 10),
                            a(c).val()) {
                        if (b = moment(a(c).val(), r.options.timepickerOptions.inputFormat),
                                !b.isValid())
                            return void a(c).parent().parent().addClass('period_picker_error');
                        if (this.period && this.period.length && e.isEqualDate(this.period[0], this.period[1]) && moment(p.eq(0).val(), r.options.timepickerOptions.inputFormat).getDate().getTime() > moment(p.eq(1).val(), r.options.timepickerOptions.inputFormat).getDate().getTime())
                            return void a(c).parent().parent().addClass('period_picker_error');
                        r.addRangeTime(r.picker.find('.period_picker_submit_dates .period_picker_time input').eq(0).val(), r.picker.find('.period_picker_submit_dates .period_picker_time input').eq(1).val());
                    }
                    a(c).parent().parent().removeClass('period_picker_error');
                }
                    ,
                    p = r.picker.find('.period_picker_submit_dates .period_picker_time input').on('keydown change', function (a) {
                        'keydown' === a.type ? (clearTimeout(r.timer3),
                            r.timer3 = setTimeout(q.bind(this), 300)) : q.call(this);
                    })),
                    r.picker.find('.period_picker_max_min').on('click', function () {
                        r.picker.toggleClass('period_picker_maximize'),
                            r.regenerate();
                    }),
                r.options.fullsizeOnDblClick && r.picker.find('.period_picker_head').on('dblclick', function () {
                    r.picker.toggleClass('period_picker_maximize'),
                        r.regenerate();
                }),
                    r.picker.find('.period_picker_close').on('click', function () {
                        r.hide();
                    }),
                r.options.mousewheel && (r.picker.on('mousewheel', function (a) {
                    return r.month += (r.options.reverseMouseWheel ? -1 : 1) * a.deltaY,
                        r.regenerate(),
                        !1;
                }),
                r.options.mousewheelYearsLine && r.picker.find('.period_picker_years_selector').on('mousewheel', function (a) {
                    return r.year += (r.options.reverseMouseWheel ? -1 : 1) * a.deltaY,
                        r.month = 1,
                        r.regenerate(),
                        a.preventDefault(),
                        a.stopPropagation(),
                        !1;
                })),
                r.options.navigate && r.picker.find('.xdsoft_navigate').on('click', function () {
                    return r.month += a(this).hasClass('xdsoft_navigate_prev') ? -1 : 1,
                        r.regenerate(),
                        !1;
                }),
                    r.picker.on('click', '.period_picker_show.period_picker_today', function () {
                        if (r.__safecall('onTodayButtonClick') !== !1) {
                            var a = new Date;
                            r.year = a.getFullYear(),
                                r.month = a.getMonth() + 1,
                                r.regenerate();
                        }
                    }),
                    r.picker.on('click', '.period_picker_show.period_picker_ok', function () {
                        r.__safecall('onOkButtonClick') !== !1 && r.hide();
                    }),
                r.options.clearButtonInButton && (r.button.find('.icon_clear').on('mouseup touchstart mousedown click', function (a) {
                    return a.preventDefault(),
                        a.stopPropagation(),
                        !1;
                }),
                    r.button.find('.icon_clear').on('mousedown', function (a) {
                        return r.clear(),
                            a.stopImmediatePropagation(),
                            !1;
                    })),
                r.options.clearButton && r.picker.on('click', '.period_picker_show.period_picker_clear', function () {
                    r.clear();
                }),
                    r.picker.on('click', '.period_picker_years_selector .period_picker_year', function () {
                        r.year = parseInt(a(this).text(), 10),
                            r.month = -Math.floor(r.monthcount / 2) + 1,
                            r.regenerate();
                    }),
                    r.picker.on('mousedown', '.period_picker_days td td,.period_picker_month', function () {
                        if (a(this).hasClass('period_picker_month'))
                            r.addRange([a(this).data('datestart'), a(this).data('dateend')]);
                        else if (!a(this).hasClass('period_picker_gray_period') && !a(this).hasClass('period_picker_empty'))
                            if (a(this).hasClass('period_picker_selector_week')) {
                                var b = parseInt(a(this).parent().data('week'), 10)
                                    ,
                                    c = r.picker.find('tr[data-week=' + b + '] > td.period_picker_cell:not(.period_picker_gray_period)')
                                    , d = c.eq(-1)
                                    , e = c.eq(0);
                                d.length && r.addRange([e.data('date'), d.data('date')]);
                            } else
                                1 !== r.picker.find('.period_picker_selected').length ? (r.picker.find('.period_picker_selected').removeClass('period_picker_selected'),
                                    a(this).addClass('period_picker_selected')) : a(this).addClass('period_picker_selected'),
                                    r.addRange(a(this).data('date'));
                    }),
                    r.picker.on('mousedown', '.period_picker_years_selector_container', function (b) {
                        n = a(this),
                            o = !0,
                            g = [b.clientX, b.clientY, parseInt(n.css('left') || 0, 10)],
                            b.preventDefault();
                    }),
                    r.picker.on('mousedown', '.period_picker_years_dragger', function (b) {
                        k = a(this),
                            j = !0,
                            g = [b.clientX, b.clientY, parseInt(k.css('left'), 10)],
                            b.stopPropagation(),
                            b.preventDefault();
                    }),
                r.options.draggable && r.picker.on('mousedown', '.period_picker_head', function (a) {
                    m = !0,
                        g = [a.clientX, a.clientY, parseInt(r.picker.css('left'), 10), parseInt(r.picker.css('top'), 10)],
                        a.preventDefault();
                }),
                    r.picker.on('mouseup', function (b) {
                        i = !1,
                            j = !1,
                            m = !1,
                            o = !1,
                        r.options.timepicker && a.fn.TimePicker && r.timepicker.find('input.timepicker').TimePicker('stopDrag'),
                            b.stopPropagation();
                    }),
                    r.picker.find('.period_picker_resizer').on('mousedown', function (a) {
                        i = !0,
                            g = [a.clientX, a.clientY, parseInt(r.picker.css('width'), 10), parseInt(r.picker.css('height'), 10)],
                            a.preventDefault();
                    }),
                    r.picker.css({
                        left: r.options.inline ? 'auto' : e.left,
                        top: r.options.inline ? 'auto' : e.top + r.button.height(),
                        width: this.options.cells[1] * r.options.monthWidthInPixels + (r.options.timepicker && a.fn.TimePicker ? 87 * (r.options.norange ? 1 : 2) : 0) + 50,
                        height: this.options.cells[0] * r.options.monthHeightInPixels + r.options.someYOffset
                    }),
                    r.options.noHideSourceInputs || r.options.likeXDSoftDateTimePicker ? (r.startinput.add(r.endinput).on('keydown.xdsoftpp mousedown.xdsoftpp', function () {
                        clearTimeout(f),
                            f = setTimeout(function () {
                                var a, b = r.getInputsValue(),
                                    c = r.options.timepicker ? r.options.formatDateTime : r.options.formatDate;
                                (void 0 !== b[0] && b[0] !== r.startinput.val() || void 0 !== b[1] && r.endinput.length && b[1] !== r.endinput.val()) && (a = new d,
                                    r.addRange([a.parseStr(r.startinput.val(), c), a.parseStr(r.endinput.val(), c)]),
                                r.period[0] && (r.year = r.period[0].getFullYear(),
                                    r.month = r.period[0].getMonth() + 1,
                                    r.regenerate()));
                            }, 300);
                    }),
                    r.options.likeXDSoftDateTimePicker && (r.button.remove(),
                        r.startinput.add(r.endinput).on('open.xdsoftpp focusin.xdsoftpp mousedown.xdsoftpp touchstart.xdsoftpp', function () {
                            var b = this;
                            a(b).is(':disabled') || r.picker.hasClass('visible') || (clearTimeout(f),
                                f = setTimeout(function () {
                                    r.show(b);
                                }, 100));
                        }),
                    r.options.hideOnBlur && r.startinput.add(r.endinput).on('blur.xdsoftpp', function () {
                        setTimeout(function () {
                            r.picker.find('*:focus').length || r.hide();
                        }, 200);
                    }))) : (r.startinput.hide(),
                        r.endinput.hide()),
                    r.options.inline ? (r.startinput.after(r.picker),
                        r.show()) : a(c.body).append(r.picker),
                    a(b).on('resize.xdsoftpp' + r.uniqueid, function () {
                        r.regenerate();
                    }).on('keydown.xdsoftpp' + r.uniqueid, function (a) {
                        if (r.picker.hasClass('visible'))
                            switch (a.which) {
                                case 40:
                                case 27:
                                    r.options.inline || r.hide();
                                    break;
                                case 37:
                                case 39:
                                    r.picker.find('.xdsoft_navigate').eq(37 === a.which ? 0 : 1).trigger('click');
                            }
                    }).on('mouseup.xdsoftpp' + r.uniqueid, function (a) {
                        i || j || m || o ? (i = !1,
                            j = !1,
                            m = !1,
                            o = !1) : r.options.inline || (r.hide(),
                        r.options.likeXDSoftDateTimePicker && (r.startinput.is(a.target) || r.endinput.is(a.target)) && r.show(a.target));
                    }).on('mousemove.xdsoftpp' + r.uniqueid, function (a) {
                        m && !r.options.inline && (h = [a.clientX - g[0], a.clientY - g[1]],
                        r.picker.hasClass('xdsoft_i_moved') || r.picker.addClass('xdsoft_i_moved'),
                            r.picker.css({
                                left: g[2] + h[0],
                                top: g[3] + h[1]
                            })),
                        i && (h = [a.clientX - g[0], a.clientY - g[1]],
                            r.picker.css({
                                width: g[2] + h[0],
                                height: g[3] + h[1]
                            }),
                            r.regenerate()),
                        j && (h = [a.clientX - g[0], a.clientY - g[1]],
                            l = g[2] + h[0],
                            k.css('left', l),
                            r.calcMonthOffsetFromPeriodDragger(l),
                            r.generateCalendars(r.month, r.year),
                            r.recalcDraggerPosition()),
                        o && (h = [a.clientX - g[0], a.clientY - g[1]],
                            l = g[2] + h[0],
                            n.css('left', l));
                    }),
                    r.generateTimePicker();
            }
            ,
            e.prototype.generateTimePicker = function () {
                var b = this;
                b.options.timepicker && void 0 !== a.fn.TimePicker && b.timepicker.each(function () {
                    var c = a(this).find('input.timepicker')
                        , d = parseInt(c.data('index') || 0, 10);
                    c.length && !c.data('timepicker') && void 0 !== a.fn.TimePicker && (d && b.options.defaultEndTime && (b.options.timepickerOptions.defaultTime = b.options.defaultEndTime),
                        c.TimePicker(b.options.timepickerOptions, a(this)),
                        b.onAfterRegenerate.push(function () {
                            c.TimePicker('regenerate');
                        }),
                        c.on('change', function () {
                            var a = b.picker.find('.period_picker_submit_dates .period_picker_time input').eq(d);
                            a.is(':focus') || a.val() === this.value || a.val(this.value).trigger('change');
                        }).trigger('change'));
                });
            }
            ,
            e.prototype.generateCalendars = function (a, b) {
                function c () {
                    var a, b = [];
                    for (a = 0; a < i.length; a += 1)
                        b.push('<th class="' + (-1 !== f.options.weekEnds.indexOf(a + f.options.dayOfWeekStart > 7 ? (a + f.options.dayOfWeekStart) % 7 : a + f.options.dayOfWeekStart) ? 'period_picker_holiday' : '') + '">' + i[a] + '</th>');
                    return b.join('');
                }

                moment.locale(this.options.lang);
                var e, f = this, g = [], h = f.getRealDateTime(), i = (new d).weekdays(f.options.dayOfWeekStart);
                for (h[1] > f.options.yearsPeriod[1] && (f.year = f.options.yearsPeriod[1],
                    b = f.year,
                    f.month = 12 - f.monthcount,
                    a = f.month),
                     h[1] < f.options.yearsPeriod[0] && (f.year = f.options.yearsPeriod[0],
                         b = f.year,
                         f.month = 1,
                         a = f.month),
                         g.push('<tr class="period_picker_first_letters_tr">'),
                         e = 0; e < f.options.cells[1]; e += 1)
                    g.push('<td class="period_picker_first_letters_td"><table class="period_picker_first_letters_table"><tbody><tr><th class="period_picker_selector_week_cap"><span class="period_picker_selector_week_cap"></span></th>' + c() + '</tr></tbody></table></td>');
                for (g.push('</tr>'),
                         e = 0; e < f.options.cells[0]; e += 1)
                    g.push('<tr>'),
                        g.push(f.generateCalendarLine(a + e * f.options.cells[1], b, f.options.cells[1])),
                        g.push('</tr>');
                f.calendarbox.html(g.join('')),
                    f.highlightPeriod();
            }
            ,
            e.prototype.i18n = function (a) {
                return void 0 !== this.options.i18n[this.options.lang] && void 0 !== this.options.i18n[this.options.lang][a] ? this.options.i18n[this.options.lang][a] : a;
            }
            ,
            e.prototype.calcPixelOffsetForPeriodDragger = function () {
                var a = this.getRealDateTime();
                return (a[1] - this.options.yearsPeriod[0]) * this.options.yearSizeInPixels + a[0] * Math.floor(this.options.yearSizeInPixels / 12);
            }
            ,
            e.prototype.calcMonthOffsetFromPeriodDragger = function (a) {
                this.year = Math.floor(a / this.options.yearSizeInPixels) + this.options.yearsPeriod[0],
                    this.month = Math.floor(a % this.options.yearSizeInPixels / Math.floor(this.options.yearSizeInPixels / 12)) + 1;
            }
            ,
            e.prototype.generateYearsLine = function () {
                if (this.options.yearsLine) {
                    var b, c = [], d = 0;
                    if (c.push('<div class="period_picker_years_dragger" title="' + this.i18n('Move to select the desired period') + '" style="left: ' + this.calcPixelOffsetForPeriodDragger() + 'px; width: ' + Math.floor(this.options.yearSizeInPixels / 12) * this.monthcount + 'px;"></div>'),
                            c.push('<div class="period_picker_years_period" style="display: block; width: 0px; left: 300px;"></div>'),
                        this.options.yearsPeriod && a.isArray(this.options.yearsPeriod))
                        for (b = this.options.yearsPeriod[0]; b <= this.options.yearsPeriod[1]; b += 1)
                            c.push('<div class="period_picker_year" style="left:' + d * this.options.yearSizeInPixels + 'px">' + b + '</div>'),
                                d += 1;
                    this.yearsline.css('width', d * this.options.yearSizeInPixels + 'px'),
                        this.yearsline.html(c.join(''));
                }
            }
            ,
            e.prototype.generateCalendarLine = function (a, b, c) {
                var e, f, g, h, i, j, k = [], l = new d, m = (new d).format('DD.MM.YYYY');
                for (l.setDate(1),
                         l.setFullYear(b),
                         l.setMonth(a - 1),
                         e = 0; c > e; e += 1) {
                    for (i = l.getMonth() + 1,
                             h = l.countDaysInMonth(),
                             k.push('<td class="period_picker_month' + l.format('M') + '"><table><tbody>'),
                             k.push('<tr><th class="period_picker_month" data-datestart="' + l.format(this.options.formatDate) + '"  data-dateend="' + l.clone(0, 0, h).format(this.options.formatDate) + '" colspan="8" title="' + l.format(this.options.formatMonth) + '">' + l.format(this.options.formatMonth) + '<b>' + l.format('M.YYYY') + '</b></th></tr>'),
                             j = 0; l.format("E") !== this.options.dayOfWeekStart && 7 > j;)
                        l.setDate(l.getDate() - 1),
                            j += 1;
                    for (f = 1,
                             j = 0; h >= f && 100 > j;) {
                        for (k.push('<tr data-week="' + l.format('W') + '">'),
                                 k.push('<td class="period_picker_selector_week" title="' + this.i18n('Select week #') + ' ' + l.format('W') + '"><span class="period_picker_selector_week"></span></td>'),
                                 g = 1; 7 >= g; g += 1)
                            l.format('M') !== i ? k.push('<td class="period_picker_empty">&nbsp;</td>') : ((!this.maxdate || l < this.maxdate) && (!this.mindate || l > this.mindate) && -1 === this.options.disableDays.indexOf(l.format(this.options.formatDate)) ? (k.push('<td data-date="' + l.format(this.options.formatDate) + '"'),
                                k.push('    class="period_picker_cell '),
                                k.push(-1 !== this.options.weekEnds.indexOf(l.format('E')) || -1 !== this.options.holidays.indexOf(l.format(this.options.formatDate)) ? ' period_picker_holiday' : ' period_picker_weekday'),
                            l.format('DD.MM.YYYY') === m && k.push(' period_picker_cell_today '),
                                k.push((7 === g || l.format('D') === h ? ' period_picker_last_cell' : '') + '">' + l.format('D') + '</td>')) : k.push('<td class="period_picker_gray_period">' + l.format('D') + '</td>'),
                                f += 1),
                                l.setDate(l.getDate() + 1);
                        j += 1,
                            k.push('</tr>');
                    }
                    a += 1,
                        l.setDate(1),
                        l.setFullYear(b),
                        l.setMonth(a - 1),
                        k.push('</tbody></table></td>');
                }
                return k.join('');
            }
            ,
            e.prototype.toggle = function () {
                this.picker.hasClass('active') ? this.hide() : this.show();
            }
            ,
            e.prototype.clear = function () {
                this.addRange(),
                this.options.onClearButtonClick && a.isFunction(this.options.onClearButtonClick) && this.options.onClearButtonClick.call(this),
                this.options.closeAfterClear && !this.options.inline && this.hide();
            }
            ,
            e.prototype.getPosition = function (c) {
                var d = this.options.likeXDSoftDateTimePicker ? a(c).offset() : this.button.offset()
                    ,
                    e = d.top + (this.options.likeXDSoftDateTimePicker ? a(c).outerHeight() : this.button.outerHeight()) - 1
                    , f = d.left;
                return e + this.picker.outerHeight() > a(b).height() + a(b).scrollTop() && (e = d.top - this.picker.outerHeight() - 1),
                0 > e && (e = 0),
                f + this.picker.outerWidth() > a(b).width() && (f = a(b).width() - this.picker.outerWidth()),
                    {
                        left: f,
                        top: e
                    };
            }
            ,
            e.prototype.show = function (a) {
                var b, c = this;
                for (c.options.inline || (c.picker.addClass('visible'),
                    setTimeout(function () {
                        c.picker.addClass('active');
                    }, 100),
                    c.options.fullsize ? c.picker.addClass('period_picker_maximize') : c.picker.hasClass('xdsoft_i_moved') || c.picker.css(c.getPosition(a))),
                         this.regenerate(),
                         b = 0; b < this.onAfterShow.length; b += 1)
                    this.onAfterShow[b].call(this);
            }
            ,
            e.prototype.hide = function () {
                var a, b = this;
                if (b.picker.hasClass('visible') && (b.picker.removeClass('active'),
                        b.picker.hasClass('animation') ? setTimeout(function () {
                            b.picker.hasClass('active') || b.picker.removeClass('visible');
                        }, 300) : b.picker.removeClass('visible'),
                    void 0 !== this.onAfterHide && this.onAfterHide.length))
                    for (a = 0; a < this.onAfterHide.length; a += 1)
                        this.onAfterHide[a].call(this);
            }
            ,
            e.prototype.destroy = function () {
                this.picker.remove(),
                    this.button.remove(),
                    this.startinput.off('.xdsoftpp').show().removeData('periodpicker'),
                    this.endinput.off('.xdsoftpp').show(),
                    a(b).off('.xdsoftpp' + this.uniqueid);
            }
            ,
            a.fn.periodpicker = function (c, f, g) {
                if (void 0 === b.moment)
                    throw new Error('PeriodPicker\'s JavaScript requires MomentJS');
                var h = this;
                return this.each(function () {
                    var b, i, j = [], k = a(this), l = k.data('periodpicker');
                    if (l)
                        switch (b = l.options,
                            c) {
                            case 'picker':
                                h = l;
                                break;
                            case 'regenerate':
                                l.regenerate(f);
                                break;
                            case 'setOption':
                                l.options[f] = g,
                                    l.applyOptions();
                                break;
                            case 'setOptions':
                                l.options = a.extend(!0, {}, l.options, f),
                                    l.applyOptions();
                                break;
                            case 'clear':
                                l.addRange();
                                break;
                            case 'change':
                                i = new d,
                                    j[0] = i.parseStr(l.startinput.val(), b.timepicker ? b.formatDateTime : b.formatDate) || i.parseStr(l.startinput.val(), b.formatDate),
                                l.endinput.length && (j[1] = i.parseStr(l.endinput.val(), b.timepicker ? b.formatDateTime : b.formatDate) || i.parseStr(l.endinput.val(), b.formatDate)),
                                    l.addRange(j);
                                break;
                            case 'destroy':
                                l.destroy();
                                break;
                            case 'hide':
                                l.hide();
                                break;
                            case 'show':
                                l.show();
                                break;
                            case 'value':
                                void 0 !== f ? (i = new d,
                                    a.isArray(f) ? (j[0] = i.parseStr(f[0], b.timepicker ? b.formatDateTime : b.formatDate) || i.parseStr(f[0], b.formatDate),
                                    void 0 !== f[1] && (j[1] = i.parseStr(f[1], b.timepicker ? b.formatDateTime : b.formatDate) || i.parseStr(f[1], b.formatDate))) : j[0] = i.parseStr(f, b.timepicker ? b.formatDateTime : b.formatDate) || i.parseStr(f, b.formatDate),
                                    l.addRange(j),
                                b.timepicker && void 0 !== a.fn.TimePicker && l.addRangeTime(j[0], j[1] || j[0])) : h = l.period;
                                break;
                            case 'valueStringStrong':
                                h = l.getInputsValue().join('-');
                                break;
                            case 'valueString':
                                h = l.getLabel().join('-');
                                break;
                            case 'disable':
                                l.button.attr('disabled', !0),
                                    l.startinput.add(l.endinput).attr('disabled', !0).attr('readonly', !0);
                                break;
                            case 'enable':
                                l.button.removeAttr('disabled'),
                                    l.startinput.add(l.endinput).removeAttr('disabled').removeAttr('readonly');
                        }
                    else
                        b = a.extend(!0, {}, a.fn.periodpicker.defaultOptions, c),
                            l = new e(this, b),
                            k.data('periodpicker', l);
                }),
                    h;
            }
            ,
            a.fn.periodpicker.defaultOptions = {
                buttonClassSuffix: '',
                tabIndex: 0,
                animation: !0,
                lang: 'zh-cn',
                i18n: {
                    en: {
                        'Select week #': 'Select week #',
                        'Select period': 'Select period',
                        'Select date': 'Select date',
                        'Choose period': 'Select period',
                        'Choose date': 'Select date',
                        Clear: 'Clear'
                    },
                    'zh-cn': {
                        'Select week #': '选择周 #',
                        'Select period': '选择时间段',
                        'Select date': '选择日期',
                        'Choose period': '选择时间段',
                        'Choose date': '选择日期',
                        Clear: '清空'
                    }
                },
                withoutBottomPanel: !1,
                showTimepickerInputs: !0,
                showDatepickerInputs: !0,
                timepicker: !1,
                useTimepickerLimits: !0,
                timepickerOptions: {
                    inputFormat: 'HH:mm'
                },
                defaultEndTime: !1,
                yearsLine: !0,
                title: !0,
                inline: !1,
                clearButtonInButton: !1,
                clearButton: !1,
                closeAfterClear: !0,
                okButton: !0,
                todayButton: !1,
                closeButton: !0,
                fullsizeButton: !1,
                resizeButton: !0,
                navigate: !0,
                fullsizeOnDblClick: !0,
                fullsize: !1,
                draggable: !0,
                mousewheel: !0,
                mousewheelYearsLine: !0,
                reverseMouseWheel: !0,
                hideAfterSelect: !1,
                hideOnBlur: !0,
                norange: !1,
                formatMonth: 'YYYY/MM',
                formatDecoreDate: 'MM/D',
                formatDecoreDateWithYear: 'YYYY/MM/D',
                formatDecoreDateWithoutMonth: 'D',
                formatDecoreDateTimeWithoutMonth: 'HH:mm D',
                formatDecoreDateTime: 'MM/D HH:mm',
                formatDecoreDateTimeWithYear: 'YYYY/MM/D HH:mm',
                formatDateTime: 'YYYY/MM/D HH:mm',
                formatDate: 'YYYY/MM/D',
                end: '',
                noHideSourceInputs: !1,
                likeXDSoftDateTimePicker: !1,
                startMonth: (new Date).getMonth() + 1,
                startYear: (new Date).getFullYear(),
                dayOfWeekStart: 1,
                yearSizeInPixels: 120,
                timepickerWidthInPixels: 50,
                monthWidthInPixels: 184,
                monthHeightInPixels: 174,
                someYOffset: 150,
                yearsPeriod: [2e3, (new Date).getFullYear() + 20],
                weekEnds: [6, 7],
                holidays: [],
                disableDays: [],
                minDate: !1,
                maxDate: !1,
                cells: [1, 3],
                utcOffset: null,
                onTodayButtonClick: !1,
                onOkButtonClick: !1,
                onAfterShow: !1,
                onAfterHide: !1,
                onAfterRegenerate: !1
            },
        void 0 === Array.prototype.indexOf && (Array.prototype.indexOf = function (a, b) {
                var c, d;
                for (d = this.length,
                         c = b || 0; d > c; c += 1)
                    if (this[c] === a)
                        return c;
                return -1;
            }
        );
    }(jQuery, window, document);