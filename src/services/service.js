import { getMessages, getMembers } from './data';

export default async function getChatLog() {
  try {
    const [members, messages] = await Promise.all([
      getMembers(),
      getMessages(),
    ]);
    return messages
      .map(msg => {
        const currentMember = members.find(
          member => member.id.localeCompare(msg.userId) === 0
        );
        const message = {
          messageId: msg.id,
          userId: msg.userId,
          timestamp: msg.timestamp,
          email: currentMember.email,
          message: msg.message,
          avatar: currentMember.avatar,
          fullName: currentMember.firstName + ' ' + currentMember.lastName,
        };
        return message;
      })
      .sort((a, b) =>
        Date.parse(a.timestamp) > Date.parse(b.timestamp)
          ? -1
          : Date.parse(a.timestamp) < Date.parse(b.timestamp)
          ? 1
          : 0
      );
  } catch (err) {
    console.error(err);
  }
}
