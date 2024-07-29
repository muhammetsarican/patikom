class BaseService {
    constructor(model) {
        this.model = model;
    }

    create(data) {
        return this.model(data).save();
    }

    read(where = {}) {
        return this.model.find(where);
    }

    update(id, data) {
        return this.model.findOneAndUpdate({ _id: id }, data, { new: true });
    }

    delete(id) {
        return this.model.findOneAndDelete({ _id: id }, { new: true });
    }
}

module.exports = BaseService;