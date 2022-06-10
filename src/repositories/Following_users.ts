import { EntityRepository, getManager, Repository } from "typeorm";

import Following_users from '../entities/Following_users'

@EntityRepository(Following_users)
class Following_usersRepository extends Repository<Following_users> {
   public async usersFollows(user_id:string) {
    const entityManager = getManager()
    const someQuery = entityManager.query(`
        select users.*,
        COUNT(CASE WHEN following_users.follower_user_id = '${user_id}' THEN true ELSE NULL END) as has_Followers
        from following_users Right JOIN users ON (users.id = following_users.user_id)
        where users.id <> '${user_id}'
        GROUP BY users.id, following_users.user_id
      `)

    return someQuery
  }
}

export {Following_usersRepository}
