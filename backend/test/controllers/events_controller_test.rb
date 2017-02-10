require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
  end

  test "should get index" do
    get events_url, as: :json
    assert_response :success
  end

  test "should create event" do
    assert_difference('Event.count') do
      post events_url, params: { event: { event_type: @event.event_type, name: @event.name, notes: @event.notes, reporter_id: @event.reporter_id, sprint_id: @event.sprint_id, tags: @event.tags } }, as: :json
    end

    assert_response 201
  end

  test "should show event" do
    get event_url(@event), as: :json
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { event_type: @event.event_type, name: @event.name, notes: @event.notes, reporter_id: @event.reporter_id, sprint_id: @event.sprint_id, tags: @event.tags } }, as: :json
    assert_response 200
  end

  test "should destroy event" do
    assert_difference('Event.count', -1) do
      delete event_url(@event), as: :json
    end

    assert_response 204
  end
end