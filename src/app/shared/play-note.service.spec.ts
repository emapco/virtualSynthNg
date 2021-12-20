import { TestBed } from '@angular/core/testing';

import { PlayNoteService } from './play-note.service';

describe('PlayNoteService', () => {
  let service: PlayNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
