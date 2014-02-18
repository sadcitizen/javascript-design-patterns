describe('Адаптер / Adapter', function () {

    var english, italian, adapter;

    before(function () {
        english = new Englishman('John', 'Smith');
        italian = new Italian('Silvio', 'Berlusconi');
        adapter = new AdaptToEnglish(italian);
    });

    describe('Englishman', function () {

        it('Инстанс', function () {
            expect(Englishman).to.be.a('function');
            expect(english).to.be.an.instanceOf(Englishman);
        });

        describe('Методы', function () {

            it('getFirstname()', function () {
                expect(english.getFirstname).to.be.a('function');
                expect(english.getFirstname()).to.equal('John');
            });

            it('getLastname()', function () {
                expect(english.getLastname).to.be.a('function');
                expect(english.getLastname()).to.equal('Smith');
            });

            it('introduce()', function () {
                expect(english.introduce).to.be.a('function');
                expect(english.introduce()).to.equal('My name is John Smith');
            });

            it('greet()', function () {
                expect(english.greet).to.be.a('function');
                expect(english.greet()).to.equal('Hello! How are you?');
            });
        });
    });

    describe('Italian', function () {

        it('Инстанс', function () {
            expect(Italian).to.be.a('function');
            expect(italian).to.be.an.instanceOf(Italian);
        });

        describe('Методы', function () {

            it('getFirstname()', function () {
                expect(italian.getFirstname).to.be.a('function');
                expect(italian.getFirstname()).to.equal('Silvio');
            });

            it('getLastname()', function () {
                expect(italian.getLastname).to.be.a('function');
                expect(italian.getLastname()).to.equal('Berlusconi');
            });

            it('introdurre()', function () {
                expect(italian.introdurre).to.be.a('function');
                expect(italian.introdurre()).to.equal('Il mio nome è Silvio Berlusconi');
            });

            it('greet()', function () {
                expect(italian.ciao).to.be.a('function');
                expect(italian.ciao()).to.equal('Ciao! Come stai?');
            });
        });
    });

    describe('AdaptToEnglish', function () {

        it('Инстанс', function () {
            expect(AdaptToEnglish).to.be.a('function');
            expect(adapter).to.be.an.instanceOf(AdaptToEnglish);
        });

        describe('Методы', function () {

            it('introduce()', function () {
                expect(adapter.introduce).to.be.a('function');
                expect(adapter.introduce()).to.equal('My name is Silvio Berlusconi');
            });

            it('greet()', function () {
                expect(adapter.greet).to.be.a('function');
                expect(adapter.greet()).to.equal('Hello! How are you?');
            });
        });
    });
});