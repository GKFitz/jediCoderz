module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        name: DataTypes.STRING,
    });
    // do we need another file under models for the posts???
}
