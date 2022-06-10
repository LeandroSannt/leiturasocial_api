import AppError from '../../errors/AppErros'
import path from 'path'
import fs from 'fs'
import uploadConfig from '../../config/upload'

import { getRepository } from 'typeorm'

import Users from '../../entities/Users'

interface FileProps {
  id: string
  avatar: string
}

class UpdatePhotoService {
  public async updatePhoto({
    id,
    avatar,
  }: FileProps): Promise<Users> {
    const userRepository = getRepository(Users)

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new AppError('nao foi encontrado usuario')
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        user.avatar
      )
      const userAvatarFileExists = await fs.promises.stat(
        userAvatarFilePath
      )

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatar
    await userRepository.save(user)

    return user
  }
}

export { UpdatePhotoService }
