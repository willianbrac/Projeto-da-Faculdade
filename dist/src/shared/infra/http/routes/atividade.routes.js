"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atividadeRoutes = void 0;
const express_1 = require("express");
const CountAtividadesController_1 = require("../../../../modules/atividade/useCases/CountAtividades/CountAtividadesController");
const CountValoresController_1 = require("../../../../modules/atividade/useCases/CountValores/CountValoresController");
const CreateAtividadeController_1 = require("../../../../modules/atividade/useCases/CreateAtividade/CreateAtividadeController");
const DeleteAtividadeController_1 = require("../../../../modules/atividade/useCases/DeleteAtividade/DeleteAtividadeController");
const ListAtividadeController_1 = require("../../../../modules/atividade/useCases/ListAtividade/ListAtividadeController");
const ListAtividadesController_1 = require("../../../../modules/atividade/useCases/ListAtividades/ListAtividadesController");
const RelatorioAtividadesController_1 = require("../../../../modules/atividade/useCases/RelatorioAtividades/RelatorioAtividadesController");
const UpdateAtividadeController_1 = require("../../../../modules/atividade/useCases/UpdateAtividade/UpdateAtividadeController");
const ValuesRelatorioController_1 = require("../../../../modules/atividade/useCases/ValuesRelatorio/ValuesRelatorioController");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const atividadeRoutes = express_1.Router();
exports.atividadeRoutes = atividadeRoutes;
const createAtividadeController = new CreateAtividadeController_1.CreateAtividadeController();
const listAtividadesController = new ListAtividadesController_1.ListAtividadesController();
const listAtividadeController = new ListAtividadeController_1.ListAtividadeController();
const deleteAtividadeController = new DeleteAtividadeController_1.DeleteAtividadeController();
const updateAtividadeController = new UpdateAtividadeController_1.UpdateAtividadeController();
const relatorioAtividadeController = new RelatorioAtividadesController_1.RelatorioAtividadesController();
const countAtividadesController = new CountAtividadesController_1.CountAtividadesController();
const countValoresController = new CountValoresController_1.CountValoresController();
const valuesRelatorioController = new ValuesRelatorioController_1.ValuesRelatorioController();
atividadeRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
atividadeRoutes.post("/", createAtividadeController.handler);
atividadeRoutes.get("/relatorio/:id_igreja", relatorioAtividadeController.handler);
atividadeRoutes.get("/grafico", valuesRelatorioController.handler);
atividadeRoutes.get("/countValores", countValoresController.handler);
atividadeRoutes.get("/countAtividades", countAtividadesController.handler);
atividadeRoutes.get("/", listAtividadesController.handler);
atividadeRoutes.get("/:id_atividade", listAtividadeController.handler);
atividadeRoutes.delete("/:id_atividade", deleteAtividadeController.handler);
atividadeRoutes.put("/:id_atividade", updateAtividadeController.handler);
