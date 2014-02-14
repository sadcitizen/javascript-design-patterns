describe('Реестр / Registry', function() {

    describe('Простой реестр', function () {

        var registry;

        before(function () {
            registry = new SimpleRegistry();
        });

        it('Инстанс', function () {
            expect(SimpleRegistry).to.be.a('function');
            expect(registry).to.be.an.instanceOf(SimpleRegistry);
            expect(registry.set).to.be.a('function');
            expect(registry.get).to.be.a('function');
            expect(registry.has).to.be.a('function');
        });

        it('Поведение', function (){
            registry.set('foo', 'bar');
            expect(registry.has('foo')).to.be.true;
            expect(registry.get('foo')).to.equal('bar');

            expect(registry.has('hello')).to.be.false;
            expect(registry.get('hello')).to.be.undefined;
        });

    });

    describe('Реестр-одиночка', function () {

        var registry, another;

        before(function () {
            registry = new SingletonRegistry();
            another = SingletonRegistry();
        });

        it('Инстанс', function () {
            expect(SingletonRegistry).to.be.a('function');
            expect(registry).to.equal(another);
            expect(registry).to.be.an.instanceOf(SingletonRegistry);
            expect(registry.set).to.be.a('function');
            expect(registry.get).to.be.a('function');
            expect(registry.has).to.be.a('function');
        });

        it('Поведение', function (){
            registry.set('foo', 'bar');
            expect(registry.has('foo')).to.be.true;
            expect(registry.get('foo')).to.equal('bar');
            expect(another.has('foo')).to.be.true;
            expect(another.get('foo')).to.equal('bar');

            expect(registry.has('hello')).to.be.false;
            expect(registry.get('hello')).to.be.undefined;
            expect(another.has('hello')).to.be.false;
            expect(another.get('hello')).to.be.undefined;
        });
    });
});