"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIgrejaUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let CreateIgrejaUseCase = class CreateIgrejaUseCase {
    constructor(igrejaRepository) {
        this.igrejaRepository = igrejaRepository;
    }
    execute({ cnpj_igreja, nome_igreja, logo_igreja, isMatriz, quantidade_membro_igreja, rua_igreja, bairro_igreja, cep_igreja, numero_residencia_igreja, complemento_residencia_igreja, id_usuario, cidade_igreja, estado_igreja, pais_igreja, id_igreja_matriz, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield this.igrejaRepository.findByName(nome_igreja);
            const usuario = yield this.igrejaRepository.findUsuarioIgreja(id_usuario);
            if (igreja) {
                throw new AppError_1.AppError("igreja ja existe");
            }
            if (usuario) {
                throw new AppError_1.AppError("usuario ja vinculado a outra igreja");
            }
            yield this.igrejaRepository.create({
                nome_igreja,
                cnpj_igreja,
                logo_igreja,
                isMatriz,
                quantidade_membro_igreja,
                rua_igreja,
                bairro_igreja,
                cep_igreja,
                numero_residencia_igreja,
                id_usuario,
                complemento_residencia_igreja,
                cidade_igreja,
                estado_igreja,
                pais_igreja,
                id_igreja_matriz,
            });
        });
    }
};
CreateIgrejaUseCase = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject("IgrejaRepository")),
    __metadata("design:paramtypes", [Object])
], CreateIgrejaUseCase);
exports.CreateIgrejaUseCase = CreateIgrejaUseCase;
