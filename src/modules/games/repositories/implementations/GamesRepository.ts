import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";

import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    // Complete usando query builder
    return this.repository
      .createQueryBuilder("games")
      .where(`games.title ILIKE '%${param}%'`)
      .getMany();

    // // ANOTHER WAY BUT DOENST WORK FOR THIS CASE
    // return this.repository
    //   .createQueryBuilder("game")
    //   .where("games.title like :title", { title: `%${param}%` })
    //   .getMany();
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(`SELECT COUNT(id) FROM games`); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    // Complete usando query builder

    return this.repository
      .createQueryBuilder("user_game")
      .relation(Game, "users")
      .of(id)
      .loadMany();

    // // ANOTHER WAY
    // const games = await this.repository
    //   .createQueryBuilder("game")
    //   .innerJoinAndSelect("game.users", "user")
    //   .where("game.id = :id", { id })
    //   .getOneOrFail();
    // return games.users;

    // // ANOTHER WAY
    // return this.repository
    //   .createQueryBuilder("game")
    //   .leftJoinAndSelect("game.users", "user")
    //   .where("game.id =  :id", { id })
    //   .select(["email", "first_name", "last_name"])
    //   .execute();
  }
}
