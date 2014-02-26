describe('Запрос/Ответ / Request/Response', function () {

    var reqres, server, client;

    before(function () {
        reqres = new RequestResponse();
        server = new Server(reqres);
        client = new Client(reqres);
    });

    describe('Request/Response', function () {

        it('RequestResponse является конструктором', function () {
            expect(RequestResponse).to.be.a('function');
            expect(reqres).to.be.an.instanceOf(RequestResponse);
        });

        it('RequestResponse обладает методом setResponse()', function() {
            expect(reqres.setResponse).to.be.a('function');
        });

        it('RequestResponse обладает методом removeResponse()', function() {
            expect(reqres.removeResponse).to.be.a('function');
        });

        it('RequestResponse обладает методом request()', function() {
            expect(reqres.request).to.be.a('function');
        });

        it('RequestResponse обладает методом clean()', function() {
            expect(reqres.clean).to.be.a('function');
        });
    });

    describe('Client и Server', function () {

        it('Client является конструктором', function () {
            expect(Client).to.be.a('function');
            expect(client).to.be.an.instanceOf(Client);
        });

        it('Client обладает методом add()', function() {
            expect(client.add).to.be.a('function');
        });

        it('Client обладает методом subtract()', function() {
            expect(client.subtract).to.be.a('function');
        });

        it('Client обладает методом multiply()', function() {
            expect(client.multiply).to.be.a('function');
        });

        it('Client обладает методом divide()', function() {
            expect(client.divide).to.be.a('function');
        });

        it('Server является конструктором', function () {
            expect(Server).to.be.a('function');
            expect(server).to.be.an.instanceOf(Server);
        });
    });

    describe('Поведение', function () {

        it("Через client: 4 + 5 = 9", function () {
            expect(client.add(4, 5)).to.equal(9);
        });

        it("Через reqres: 4 + 5 = 9", function () {
            expect(reqres.request('add', { x: 4, y: 5})).to.equal(9);
        });

        it("Через client: 21 - 3 = 18", function () {
            expect(client.subtract(21, 3)).to.equal(18);
        });

        it("Через reqres: 21 - 3 = 18", function () {
            expect(reqres.request('subtract', { x: 21, y: 3})).to.equal(18);
        });

        it("Через client: 16 * 15 = 240", function () {
            expect(client.multiply(16, 15)).to.equal(240);
        });

        it("Через reqres: 16 * 15 = 240", function () {
            expect(reqres.request('multiply', { x: 16, y: 15})).to.equal(240);
        });

        it("Через client: 22 / 2 = 11", function () {
            expect(client.divide(22, 2)).to.equal(11);
        });

        it("Через reqres: 22 / 2 = 11", function () {
            expect(reqres.request('divide', { x: 22, y: 2})).to.equal(11);
        });
    });
});