import {
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from "sequelize-typescript";

@Table({
  tableName: "user",
  timestamps: true,
})
class User extends Model {
  @CreatedAt
  created_at?: Date;

  @UpdatedAt
  updated_at?: Date;

  @DeletedAt
  deleted_at?: Date;
}

export default User;
