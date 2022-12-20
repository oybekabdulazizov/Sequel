module.exports = {
    getError(errors, prop) {
        try {
            return errors.mapped()[prop].msg;
        } catch (er) {
            return '';
        }
    }, 

    userSignedIn(req) {
        try{
            if (req.session.userId) {
                return true;
            }
        } catch(err) {
            return false;
        }
    }
}