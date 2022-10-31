const MongoDbRepo = require('../repository/mongoRepository');

class EventService {
  constructor() {
    this.EventRepository = new MongoDbRepo('Events');
  }

  getAllEvents() {
    return this.EventRepository.getAll();
  }

  updateEvent(_id, opt) {
    return this.EventRepository.updateOne(_id, opt);
  }

  deleteEvent(_id) {
    return this.EventRepository.deleteOne(_id);
  }

  createEvent(opt) {
    return this.EventRepository.create(opt);
  }
}

module.exports = EventService;