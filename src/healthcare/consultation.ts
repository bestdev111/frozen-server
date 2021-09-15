import { Sequelize, sequelize } from "../const";
import { Medecin } from "./medecin";
import { Patient } from "./patient";

export const ProcessusConsultation = sequelize.define('processus_consultation',
{
  schema: { type: Sequelize.STRING, allowNull: false }
},
{
  freezeTableName: true
});

export const Consultation = sequelize.define(
  'consultation', {
    description: { type: Sequelize.STRING, allowNull: false },
    date: { type: Sequelize.DATE, allowNull: false }
  },
  {
    freezeTableName: true
  }
);

export const PriseSignesVitaux = sequelize.define(
  'prise_signes_vitaux',
  {
    symptomes: { type: Sequelize.STRING },
    tension: { type: Sequelize.STRING },
    poids: { type: Sequelize.DOUBLE },
    temperature: { type: Sequelize.DOUBLE },
    imc: { type: Sequelize.STRING },
    date: { type: Sequelize.DATE },
    stage: { type: Sequelize.STRING },
  },
  { freezeTableName: false }
);


Patient.hasMany(Consultation, { as: 'consultations', foreignKey: 'patient' });
Consultation.belongsTo(Patient, { as: 'client', foreignKey: 'patient' });
Medecin.hasMany(Consultation, { as: 'Consultations', foreinKey: { name: 'medecin', allowNull: true }});
Consultation.belongsTo(Medecin, { as: 'Medecin', foreignKey: { name: 'medecin', allowNull: true }});
PriseSignesVitaux.belongsTo(Consultation, { as: 'Consultation', foreignKey: 'consultation'});

export const setupConsultationResource = (finale: any) => {
  const consultations = finale.resource({
    model: Consultation,
    associations: true,
    pagination: false,
    endpoints: ['/consultations', '/consultations/:id'],
  });
};
