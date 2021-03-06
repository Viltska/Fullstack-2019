"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const generateId = () => {
    const id = Math.floor(Math.random() * 99999999999);
    return id.toString();
};
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseSpecialist = (specialist) => {
    if (!specialist || !isString(specialist)) {
        throw new Error('Incorrect or missing specialist: ' + specialist);
    }
    return specialist;
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date ' + date);
    }
    return date;
};
const parseDescription = (description) => {
    if (!description || !isString(description)) {
        throw new Error('Incorrect or missing description: ' + description);
    }
    return description;
};
const toNewEntry = (object) => {
    switch (object.type) {
        case 'HealthCheck':
            return {
                id: generateId(),
                type: 'HealthCheck',
                specialist: parseSpecialist(object.specialist),
                date: parseDate(object.date),
                description: parseDescription(object.description),
                healthCheckRating: object.healthCheckRating,
            };
        case 'Hospital':
            return {
                id: generateId(),
                type: 'Hospital',
                specialist: parseSpecialist(object.specialist),
                date: parseDate(object.date),
                description: parseDescription(object.description),
                diagnosisCodes: object.diagnosisCodes,
            };
        case 'OccupationalHealthcare':
            return {
                id: generateId(),
                type: 'OccupationalHealthcare',
                specialist: parseSpecialist(object.specialist),
                date: parseDate(object.date),
                description: parseDescription(object.description),
                diagnosisCodes: object.diagnosisCodes,
                employerName: object.employerName,
                sickLeave: {
                    startDate: object.sickLeave.startDate,
                    endDate: object.sickLeave.endDate,
                },
            };
        default:
            throw new Error('Incorrect or missing type: ' + object.type);
    }
};
exports.default = toNewEntry;
