import { Test, TestingModule } from '@nestjs/testing';
import { NoticiaController } from './noticia.controller';

describe('NoticiaController', () => {
  let controller: NoticiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoticiaController],
    }).compile();

    controller = module.get<NoticiaController>(NoticiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
