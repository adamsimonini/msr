const StringUtil = require('../../utilities/string-util');
import User from '../../model/user-model';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.status(400).json({ message: validation.message });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password,
        first: req.body.first,
        last: req.body.last,
    });
    user.save(error => {
        if (error) {
            if (error.code === 11000) {
                return res.status(403).json({ message: 'Username is already taken' });
            }
            return res.status(500).json();
        }
        return res.status(201).json();
    });
}

function isEmpty(value) {
    return !value || !value.trim();
}

function validateIndex(body) {
    let errors = '';
    if (isEmpty(body.username)) {
        errors += 'Username is required. ';
    }
    if (isEmpty(body.password)) {
        errors += 'Password is required. ';
    }
    if (isEmpty(body.first)) {
        errors += 'First name is required. ';
    }
    if (isEmpty(body.last)) {
        errors += 'Last name is required. ';
    }
    return {
        isValid: isEmpty(errors),
        message: errors
    }
}