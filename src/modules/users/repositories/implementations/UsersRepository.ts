import { getRepository, Repository } from "typeorm";

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    return this.repository.findOneOrFail(user_id);

    // // OUTRA OPCAO
    // const user = await this.repository.findOne(user_id);
    // if (!user) {
    //   throw new Error("User not found!");
    // }
    // return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    // Complete usando raw query
    return this.repository.query(`SELECT * FROM users ORDER BY first_name`);
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    // Complete usando raw query
    return this.repository.query(
      `SELECT * FROM users HAVING first_name='${first_name}' AND last_name='${last_name}'`
    );
  }
}
