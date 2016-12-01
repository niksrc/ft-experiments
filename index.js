const Maybe = require('folktale').data.maybe;

const parseJSON = param => {
	try {
		const obj = JSON.parse(param);
		return Maybe.Just(obj);
	} catch(err) { return Maybe.Nothing() }
}

module.exports = {parseJSON}
