const db = require('../config/db');

const Produtos = {
    create: (user, callback) => {
        const query = 'INSERT INTO Produtos (nome, descricao, preco ) VALUES (?, ?, ?)';
        db.query(query, [Produtos.nome, Produtos.descricao, Produtos.preco], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM Produtos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByUsername: (nome, callback) => {
        const query = 'SELECT * FROM Produtos WHERE nome = ?';
        db.query(query, [nome], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, Produtos, callback) => {
        const query = 'UPDATE Produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?';
        db.query(query, [Produtos.username, Produtos.descricao, Produtos.preco, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM Produtos WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM Produtos';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = User;
