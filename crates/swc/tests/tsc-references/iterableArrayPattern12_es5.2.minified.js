import * as swcHelpers from "@swc/helpers";
var Bar = function() {
    "use strict";
    swcHelpers.classCallCheck(this, Bar);
}, Foo = function(Bar1) {
    "use strict";
    swcHelpers.inherits(Foo, Bar1);
    var _super = swcHelpers.createSuper(Foo);
    function Foo() {
        return swcHelpers.classCallCheck(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(Bar), _iterator = Symbol.iterator, FooIterator = function() {
    "use strict";
    function FooIterator() {
        swcHelpers.classCallCheck(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    return _proto.next = function() {
        return {
            value: new Foo,
            done: !1
        };
    }, _proto[_iterator] = function() {
        return this;
    }, FooIterator;
}();
!function() {
    var ref = swcHelpers.toArray(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new FooIterator);
    ref[0], ref.slice(1);
}(new FooIterator);
