# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170210195821) do

  create_table "events", force: :cascade do |t|
    t.string   "event_type"
    t.string   "name"
    t.text     "notes"
    t.integer  "reporter_id"
    t.string   "tags"
    t.integer  "sprint_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["reporter_id"], name: "index_events_on_reporter_id"
    t.index ["sprint_id"], name: "index_events_on_sprint_id"
  end

  create_table "sprints", force: :cascade do |t|
    t.date     "end_date"
    t.date     "start_date"
    t.integer  "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_sprints_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string   "name"
    t.string   "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "password_digest"
    t.integer  "team_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["team_id"], name: "index_users_on_team_id"
  end

end
