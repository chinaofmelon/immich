export const ICommunicationRepository = 'ICommunicationRepository';

export enum CommunicationEvent {
  UPLOAD_SUCCESS = 'on_upload_success',
  ASSET_DELETE = 'on_asset_delete',
  PERSON_THUMBNAIL = 'on_person_thumbnail',
  SERVER_VERSION = 'on_server_version',
}

export interface ICommunicationRepository {
  send(event: CommunicationEvent, userId: string, data: any): void;
}
