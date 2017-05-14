module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING, // AllowNull is a flag that restricts a burger from being entered if it doesn't
      // have a text value
      allowNull: false, // len is a validation that checks that our burger is between 1 and 140 characters
      validate : {
        len: {
          args: [1, 140],
          msg : 'Please enter in a burger.'
        }
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN, // defaultValue is a flag that defaults a new burger complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Burgers;
};