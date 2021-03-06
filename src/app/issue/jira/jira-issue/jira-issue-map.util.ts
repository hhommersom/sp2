import { JiraAttachment, JiraAuthor, JiraChangelogEntry, JiraComment, JiraIssue, } from './jira-issue.model';
import {
  JiraIssueOriginal,
  JiraOriginalAttachment,
  JiraOriginalAuthor,
  JiraOriginalChangelog,
  JiraOriginalComment
} from '../jira-api-responses';
import { JiraCfg } from '../jira';
import { DropPasteIcons, DropPasteInputType } from '../../../core/drop-paste-input/drop-paste-input';

const matchProtocolRegEx = /(^[^:]+):\/\//;

export const mapIssuesResponse = (res, cfg: JiraCfg) => res.response.issues.map((issue) => {
  return mapIssue(issue, cfg);
});

export const mapResponse = (res) => res.response;

export const mapIssueResponse = (res, cfg: JiraCfg) => mapIssue(res.response, cfg);

export const mapIssue = (issue: JiraIssueOriginal, cfg: JiraCfg): JiraIssue => {
  const issueCopy = Object.assign({}, issue);
  const fields = issueCopy.fields;

  return {
    key: issueCopy.key,
    id: issueCopy.id,
    components: fields.components,
    timeestimate: fields.timeestimate,
    timespent: fields.timespent,
    description: fields.description,
    summary: fields.summary,
    updated: fields.updated,
    status: fields.status,
    attachments: fields.attachment && fields.attachment.map(mapAttachment),
    comments: fields.comment && fields.comment.comments.map(mapComments),
    changelog: mapChangelog(issueCopy.changelog),
    assignee: mapAuthor(fields.assignee),
    url: makeIssueUrl(cfg.host, issueCopy.key)
  };
};


export const makeIssueUrl = (host: string, issueKey: string): string => {
  let fullLink = host + '/browse/' + issueKey;
  if (!fullLink.match(matchProtocolRegEx)) {
    fullLink = 'https://' + fullLink;
  }
  return fullLink;
};


export const mapAuthor = (author: JiraOriginalAuthor): JiraAuthor => {
  if (author) {
    return Object.assign({}, author, {
      self: undefined,
      avatarUrls: undefined,
      avatarUrl: author.avatarUrls['48x48'],
    });
  } else {
    return null;
  }
};
export const mapAttachment = (attachment: JiraOriginalAttachment): JiraAttachment => {
  return Object.assign({}, attachment, {
    self: undefined,
    author: undefined
  });
};
export const mapComments = (comment: JiraOriginalComment): JiraComment => {
  return Object.assign({}, comment, {
    self: undefined,
    updateAuthor: undefined,
    author: mapAuthor(comment.author)
  });
};

export const mapJiraAttachmentToAttachment = (jiraAttachment: JiraAttachment) => {
  const type = mapAttachmentType(jiraAttachment.mimeType);
  return {
    title: jiraAttachment.filename,
    path: jiraAttachment.thumbnail || jiraAttachment.content,
    originalImgPath: jiraAttachment.content,
    type,
    icon: DropPasteIcons[type]
  };
};

export const mapChangelog = (changelog: JiraOriginalChangelog): JiraChangelogEntry[] => {
  return [];
};

const mapAttachmentType = (mimeType: string): DropPasteInputType => {
  switch (mimeType) {
    case 'image/gif':
    case 'image/jpeg':
    case 'image/png':
      return 'IMG';

    default:
      return 'LINK';
  }

};
