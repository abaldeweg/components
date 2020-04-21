import notification from '../../src/services/notification'

describe('Notifications', () => {
  it('has a notification', () => {
    notification.create('test')

    expect(notification.list()[0].id).toBeGreaterThan(0)
    expect(notification.list()[0].msg).toBe('test')
    expect(notification.list()[0].state).toBe('neutral')
    expect(notification.list()[0].timer).toBe(5000)
    expect(notification.list()[0].undo).toBeNull()
  })
})
